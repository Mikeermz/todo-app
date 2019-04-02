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
    complete: false
  }

  listToDo.push(toDo)
  saveDB()
  return console.log(toDo);
}

const getList = () => {
  showDB();
  return listToDo;
}

module.exports = { create, getList }
