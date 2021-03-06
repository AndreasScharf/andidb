module.exports = {

  'maschine_values' :[
    { type:  'hybrid', locked: 0, value: 1.5, name: 'Betrieb Anlage', comment: '' },

    { type: 'hybrid', locked: 0, value: 0, name: 'Fatal Error Anlage', comment: '' },
    { type: 'hybrid', locked: 0, value: 0, name: 'Fatal Warning Anlage', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'Procedur Error Anlage', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'Procedur Warning Anlage', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'Sensor Error Anlage', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'Sensor Warning Anlage', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'Actoric Error Anlage', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'Actoric Warning Anlage', comment: '' },
  ],
  'input_values': [
    { type: 'dynamic', locked: 0, value: 0, name: 'raw water pressure', comment: 'Sensor 1' },
    { type: 'dynamic', locked: 0, value: 0, name: 'raw water flow', comment: 'Sensor 1' },
    { type: 'dynamic', locked: 0, value: 0, name: 'temperatur', comment: 'Sensor 1' },

    { type: 'dynamic', locked: 0, value: 0, name: 'raw water pressure after cadridge', comment: 'Sensor 2' },

    { type: 'dynamic', locked: 0, value: 0, name: 'permeate flow', comment: 'Sensor 3' },

    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade pressure', comment: 'Sensor 4' },
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade flow', comment: 'Sensor 4' },

    { type: 'dynamic', locked: 0, value: 0, name: 'conductivity', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'waterlevel pressure', comment: 'Sensor 5' },
  ],
  'output_values': [
    { type: 'dynamic', locked: 0, value: 0, name: 'rawwater valve', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'rawwater valve auto', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'rawwater valve hand mode', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'rawwater valve hand value', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'feedpump', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'feedpump auto', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'feedpump hand mode', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'feedpump hand value', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'feedpump error', comment: '' },

    /*Antiscalant pump*/
    { type: 'dynamic', locked: 0, value: 0, name: 'antiscalantpump', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'antiscalantpump auto', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'antiscalantpump hand mode', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'antiscalantpump hand value', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'antiscalantpump error', comment: '' },

    /*Concentrade valve*/
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve fullopen', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve setpoint auto', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve setpoint hand', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve handmode', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve closed', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve open', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve opening', comment: 'acual output' },
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve closing', comment: 'acual output' },

    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve open endpoint', comment: 'input' },
    { type: 'dynamic', locked: 0, value: 0, name: 'concentrade valve close endpoint', comment: 'input' },

    { type: 'dynamic', locked: 0, value: 0, name: 'alarm', comment: '' },

  ],
  'calculated_values' :[
    { type: 'dynamic', locked: 0, value: 0, name: 'waterlevel', comment: '[%]' },
    { type: 'dynamic', locked: 0, value: 0, name: 'differential pressure cadridge', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'flow raw water [l/h]', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'flow permeate [l/h]', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'flow concentrade [l/h]', comment: '' },
  ],
  'totalizers_values':[
    { type: 'dynamic', locked: 0, value: 0, name: 'amount raw water', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'amount permeate', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'amount concentrade', comment: '' },

  ],
  'working_values': [
    { type: 'dynamic', locked: 0, value: 0, name: 'waterlevel at max', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'waterlevel at min', comment: '' },

    { type:  'hybrid', locked: 0, value: 0, name: 'requst tank', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'requst tank auto', comment: '' },
    { type:  'hybrid', locked: 0, value: 0, name: 'requst tank hand', comment: '' },
    { type:  'hybrid', locked: 0, value: 0, name: 'requst tank handmode', comment: '' },

    { type: 'hybrid', locked: 0, value: 0, name: 'dry run protection trys', comment: '' },

  ],
  'timer_values': [
    { type: 'hybrid', locked: 0, value: 0, name: 'timer0 elapse at', comment: '' },

  ],
  'step_values' : [
    { type: 'dynamic', locked: 0, value: 0, name: 'start flush open valves', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'start flush start pumps', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'produce', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'shutdown open valves', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'shutdown stop pump', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'shutdown close valves', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'idle', comment: '' },

    { type: 'dynamic', locked: 0, value: 0, name: 'idle flush open valves', comment: '' },
    { type: 'dynamic', locked: 0, value: 0, name: 'idle flush close valves', comment: '' },
  ],
  'enviroment_values' : [
    { type:  'static', locked: 0, value: 0, name: 'watertank height', comment: '[m]' },
    { type:  'static', locked: 0, value: 0, name: 'watertank offset', comment: '[m]' },

    { type:  'static', locked: 0, value: 0, name: 'watertank request start at', comment: '[%]' },
    { type:  'static', locked: 0, value: 0, name: 'watertank request stop at', comment: '[%]' },

    { type:  'static', locked: 0, value: 0, name: 'concentrade percentage', comment: '[%]' },
    { type:  'static', locked: 0, value: 0, name: 'dry run protection trys max', comment: '' },


    { type:  'static', locked: 0, value: 0, name: 'dry run protection error pressure min', comment: '[bar]' },
    { type:  'static', locked: 0, value: 0, name: 'dry run protection error pressure max', comment: '[bar]' },

    /*Frames for differential pressure cadridge*/ 
    { type:  'static', locked: 0, value: 0, name: 'differntial pressure warning cadridge min', comment: '[bar]' },
    { type:  'static', locked: 0, value: 0, name: 'differntial pressure warning cadridge max', comment: '[bar]' },
    { type:  'static', locked: 0, value: 0, name: 'differntial pressure error cadridge min', comment: '[bar]' },
    { type:  'static', locked: 0, value: 0, name: 'differntial pressure error cadridge max', comment: '[bar]' },

    /*Frames for conductivity */
    { type: 'static', locked: 0, value: 0, name: 'conductivity warning cadridge min', comment: '[uS]' },
    { type: 'static', locked: 0, value: 0, name: 'conductivity warning cadridge max', comment: '[uS]' },
    { type: 'static', locked: 0, value: 0, name: 'conductivity error cadridge min', comment: '[uS]' },
    { type: 'static', locked: 0, value: 0, name: 'conductivity error cadridge max', comment: '[uS]' },

    /*Frames for flow concentrade */
    { type: 'static', locked: 0, value: 0, name: 'flow concentrade warning cadridge min', comment: '[l/h]' },
    { type: 'static', locked: 0, value: 0, name: 'flow concentrade warning cadridge max', comment: '[l/h]' },
    { type: 'static', locked: 0, value: 0, name: 'flow concentrade error cadridge min', comment: '[l/h]' },
    { type: 'static', locked: 0, value: 0, name: 'flow concentrade error cadridge max', comment: '[l/h]' },


    /*Frames for flow permeate */
    { type: 'static', locked: 0, value: 0, name: 'flow permeate warning cadridge min', comment: '[l/h]' },
    { type: 'static', locked: 0, value: 0, name: 'flow permeate warning cadridge max', comment: '[l/h]' },
    { type: 'static', locked: 0, value: 0, name: 'flow permeate error cadridge min', comment: '[l/h]' },
    { type: 'static', locked: 0, value: 0, name: 'flow permeate error cadridge max', comment: '[l/h]' },
  ],
  'sensors':[
    { type: 'static', locked: 0, value: 0, name: 'Sensor 1 MFS', comment: '', datatype: 'text' },
    { type: 'static', locked: 0, value: 0, name: 'Sensor 2 RPS', comment: '', datatype: 'text' },
    { type: 'static', locked: 0, value: 0, name: 'Sensor 3 VFS', comment: '', datatype: 'text' },
    { type: 'static', locked: 0, value: 0, name: 'Sensor 4 MFS', comment: '', datatype: 'text' },
    { type: 'static', locked: 0, value: 0, name: 'Sensor 5 RPS', comment: '', datatype: 'text' },

  ]
}