var toDosList = {
  //array we work with;
  toDos: [],
  displayToDos: function () {
    console.log("My ToDos:", this.toDos);
  },
  //method (property) to add new object in the array
  addToDo: function (toDoText) {
    this.toDos.push({
      toDoText: toDoText,
      completed: false
    });
    this.displayToDos();
  },
  //method (property) to change toDoText property value(toDoText) in the slected object(position) in the array
  changeToDo: function (position, toDoText) {
    this.toDos[position].toDoText = toDoText;
    //this.toDos[position] = newValue;
    this.displayToDos();
  },

  toggleCompleted: function (position) {
    /**
     *var todoPosition = this.toDos[position]; //saved the variable to todo to save typeing
     *todo.completed = !todo.completed; //access the compeleted property value and change it to the opposite value with !
     */
    this.toDos[position].completed = !this.toDos[position].completed;
    this.displayToDos();
  },
  //method (property) to delete item in the array
  deleteToDo: function (position) {
    this.toDos.splice(position, 1);
    this.displayToDos();
  }
};