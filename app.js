const { argv } = require('./config/yargs');
const colors = require('colors');
const toDo = require('./to-do/to-do');

const comando = argv._[0];

switch (comando) {
  case 'show':
    const tasks = toDo.getList();
    tasks.forEach(task => {
      console.log("========To Do==========".green)
      console.log('task: ', task.description)
      console.log('status: ', task.complete)
      console.log("=======================".green)
    });
    break;
  case 'create':
    toDo.create( argv.description ) 
    break;
  case 'update':
    console.log('Update Tasks');
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
