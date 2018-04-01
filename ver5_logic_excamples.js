var toDosList = {
  //array we work with;
  toDos: [],
  displayToDos: function () {

    /*display toDoText value of each property in the objects found in the toDos array;
    for (let i = 0; i < this.toDos.length; i++) {
      console.log(this.toDos[i].toDoText);
    }*/

    if (this.toDos.length === 0) {
      console.log('Your todo list is empty!');
    } 
    else {
      console.log("My ToDos:");
      for (let i = 0; i < this.toDos.length; i++) {
        if (this.toDos[i].completed === true) { // checks to see if completed property of the object in the array is ture;
          console.log( '(x) ' + this.toDos[i].toDoText); // if true log the toDoText as instructed;
        }
        else {
          console.log('( ) ' + this.toDos[i].toDoText); // else (false) log the toDoText as instructed;
        }
      }
    }
  },

  //method (property of toDoList) to add new object in the array
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