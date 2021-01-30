var net = require('net');

var client_R = new net.Socket();
var client_W = new net.Socket();


client_R.connect(1337, '127.0.0.1', function () {
  console.log('Connected');
  let i = 0
  setInterval (()=>{
    if(i > 100)
      i = 0
    client_W.write('PULL;maschine_values;2\n');

    i++;
  }, 1)

});

let a = 0;
client_R.on('data', function (data) {
  let messages = data.toString().split('\n')
  messages.forEach(msg => {
    let chunks = msg.split(';');
    
    if (chunks.length != 4)
      return; 
    
    //right anwsers
    if(a > 100)
      a = 0
   /* if (parseInt(chunks[3]) != a)
      console.log('error', parseInt(chunks[3]) ,a);
    */a++;
    console.log(chunks[3]);
    if (chunks[3] == undefined)
      console.log('error', msg);
    
  });
});

client_R.on('close', function () {
  console.log('Connection closed');
});

client_W.connect(1337, '127.0.0.1', function () {
  console.log('Connected');
 
  setInterval(() => {
    client_W.write('PULL;maschine_values;0\n');

  }, 1)
});

client_W.on('data', function (data) {
  let messages = data.toString().split('\n')
  messages.forEach(msg => {
    let chunks = msg.split(';');

    if (chunks.length != 4)
      return;

    //right anwsers
    if (a > 100)
      a = 0
   /* if (parseInt(chunks[3]) != a)
      console.log('error', parseInt(chunks[3]), a);
    */a++;
    console.log(chunks[3]);
    if (chunks[3] == undefined)
      console.log('error', msg);

  });
});

client_R.on('close', function () {
  console.log('Connection closed');
});
process.on('SIGINT', function () {
  console.log("Caught interrupt signal");
  client_R.destroy()
  process.exit()
});