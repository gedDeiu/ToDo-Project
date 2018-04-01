/**
 *var ardei = {
  *myName: 'Andrei',
  *sayName: function () {
  *  console.log(this.myName); //method - a property equal to a function
  *}                           //here this referes to the object
}

ardei.sayName;
 */

var toDosList = {
  //array we work with;
  toDos: ['item1', 'item2', 'item3'],
  displayToDos: function () {
    console.log("My ToDos:", this.toDos);
  },
  //method (property) to add new item in the array
  addToDo: function (newToDo) {
    this.toDos.push(newToDo);
    this.displayToDos();
  },
 //method (property) to change item in the array
  changeToDo: function (position, newValue) {
    this.toDos[position] = newValue;
    this.displayToDos();
  },
  //method (property) to delete item in the array
  deleteToDo: function (position) {
    this.toDos.splice(position, 1);
    this.displayToDos();
  }
};