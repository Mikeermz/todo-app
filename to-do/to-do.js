const fs = require('fs');

let listToDo = [];

const saveDB = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile(`db/db.json`, data, (err) => {
    if (err) throw new Error('Dont Save', err);
    else console.log(`The file  has been saved!`);
  });
}

const showDB = () => {
  try {
    listToDo = require('../db/db.json');
  } catch (error) {
    listToDo = [];
  }
}

const create = (description) =>{
  showDB()
  let toDo = {
    description,
    completed: false
  }

  listToDo.push(toDo)
  saveDB()
  return console.log(toDo);
}

const getList = () => {
  showDB();
  return listToDo;
}

const updateList = (description, completed = true) => {
  showDB();
  const index = listToDo.findIndex( task =>{
    return task.description === description
  });

  if (index >= 0 ) {
    listToDo[index].completed = completed;
    saveDB()
    return true
  } else {
    return false
  }
}

const deleteToList = (description) => {
  showDB();
  const newList = listToDo.filter( task =>{
    return task.description !== description
  });

  if (newList.length === listToDo.length){
    return false;
  } else {
    listToDo = newList;
    saveDB();
    return true
  }

}

module.exports = { create, getList, updateList, deleteToList }
