const net = require('net');
const fs = require('fs');

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  cors:{
    origin:'*'
  }
});
const cors = require('cors');
const bodyParser = require('body-parser');

const path_to_tables = 'tables.json'
const port = 1337;
const webserver = true;
const webserverport = 8000;

let tables = require('./datatables.js');

try{
  const text = fs.readFileSync(path_to_tables, 'utf8')
  tables = JSON.parse(text)
  console.log('Init Tables with File');
}catch{
  console.log('Have to create File');
  fs.writeFileSync(path_to_tables, JSON.stringify(tables, null, 2));
}

const server = net.createServer(function (socket) {
  socket.connected = true;

  socket.setEncoding(socket.defaultEncoding)// Encoding to UTF-8

  socket.on('data', (data)=>{
    let messages = data.split('\n');
    messages.forEach(msg => {
      if (!socket.connected)
        return;

      const arguments = msg.split(';')
      if (!arguments.length)
        return;

      else if (arguments[0] == 'PUSH'){//WRITE Data
        let table = arguments[1].toString()
        let index = parseInt(arguments[2])
        if(!tables[table]){
          console.log('table error');
          return
        }
        let element = tables[table][index];
        if(!element){
          console.log('index error');
          return;
        }

        if(element.locked)
          return;

        let newValue = parseFloat(arguments[3]);
        let save = element.value != newValue && (element.type == 'static' || element.type=='hybrid')
        element.value = newValue;
        if(save){
          save_tables()
        }
      
      }else if (arguments[0] == 'PULL') {//READ Data
        let table = arguments[1].toString()
        let index = parseInt(arguments[2])
        if(socket.connected)
          socket.write(`PULLBACK;${table};${index};${tables[table][parseInt(index)].value}\n`);
      }else if (arguments[0] == 'INDEX'){//get INDEX BY name
        let table = arguments[1].toString();
        let name = arguments[2].toString()

        if(socket.connected)
           socket.write(`INDEXBACK;${table};${name};${tables[table].map(e => e.name).indexOf(name)}\n`);
      }
    });
  });
  socket.on('end', (data) =>{
    socket.connected = false;
  });
  socket.on('error', (e)=>{
  })
});

async function save_tables(){
  const copy_tables = JSON.parse(JSON.stringify(tables, null, 2));//DEEP Copy of Object

  for (const table_key in copy_tables) {
    copy_tables[table_key].forEach(item => {
      if(item.type == 'dynamic' && !item.locked)
        item.value = 0
    })
  }

  fs.writeFileSync(path_to_tables, JSON.stringify(copy_tables, null, 2));
}

server.listen(port, '127.0.0.1');
console.log(`AndiDB Server Online on ${port}`);

if(!webserver)
  return;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.all('*', cors(corsOptions), function (req, res, next) {
  next();
});

app.use('/', express.static('webclient'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/webclient/index.html');
});

io.on('connection', function (socket) {
  socket.on('error', (e)=>{
    console.log('error 1');
  })

  socket.on('get_tables', (data)=>{
    let table_names = []
    for (const key in tables) {
      table_names.push(key)
    }
    socket.emit('set_tables', {table_names: table_names});
  });
  socket.on('get_table', (data) =>{
    let table = tables[data.name]
    if(table)
      socket.emit('set_table', {name:data.name, table: table})
  });
  socket.on('set_value', (data) => {
    let table = tables[data.table]
    if(!table)
      return;
    
    let element = table[data.index];
    if(!element)
      return

    element.value = data.value;
    if(element.locked || element.type == 'hybrid' || element.type == 'static')
      save_tables();
  });
  socket.on('lock_value', (data) =>{
   
    let table = tables[data.table]
    if (!table)
      return;

    let element = table[data.index];
    if (element)
      element.locked = (data.value * 1);

    save_tables();
  });

});
io.on('error', (e)=>{
  console.log('error 2');

});

http.listen(webserverport, () => {
  console.log(`Webserver listening on *:${webserverport}`);
});

