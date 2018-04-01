/**
 * 
 * @param {*} person 
 */

function sayHiTo(person) {
  console.log('hi', person); // person = 'gordon'
}

//sayHiTo('gordon');

var toDos = ['item1', 'item2', 'item3'];


// It should have a function to display toDos
function displayToDos(array) {
  console.log("My ToDos:", array);

}
// It should have a function to add toDos
function addToDo(array, item) {
  array.push(item);
  displayToDos(array);
}

// It should have a function to change toDos
function changeToDo(array, position, newValue) {
  array[position] = newValue;
  displayToDos(array);
}

// It should have a function to delete toDos
function deleteToDo(array, position, howMany) {
  array.splice(position, howMany);
  displayToDos(array);
}s

//addToDo (toDos, 'Ardei');
//changeToDo(toDos, 0, 'pescu');
//deleteToDo(toDos, 1, 1);

//Version 4

//i = 0 initialization;
//execute body of for loop;
//increase i as instructed by final-xpression
//check condition
//if true execute for body again;

for (let i = 0; i < toDos.length; i++) {
  console.log(toDos[i]);
}