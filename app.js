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
      console.log('status: ', task.completed)
      console.log("=======================".green)
    });
    break;
  case 'create':
    toDo.create( argv.description ) 
    break;
  case 'update':
    const updateTask = toDo.updateList(argv.description, argv.completed)
    console.log(updateTask)
    break;
  default:
    console.log("Comando no reconocido");
    break;
}
