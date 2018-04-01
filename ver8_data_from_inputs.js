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
    } else {
      console.log("My ToDos:");
      for (let i = 0; i < this.toDos.length; i++) {
        if (this.toDos[i].completed === true) { // checks to see if completed property of the object in the array is ture;
          console.log('(x) ' + this.toDos[i].toDoText); // if true log the toDoText with (x) completed marker;
        } else {
          console.log('( ) ' + this.toDos[i].toDoText); // else (false) log the toDoText as instructed;
        }
      }
    }
  },

  //method (property of toDoList) to add new object in the array
  addToDo: function (toDoText) {
    // var tasks = toDoText.split(',');
    // for (let i = 0; i < tasks.length; i++) {
    //       this.toDos.push({
    //         toDoText: tasks[i],
    //         completed: false
    //       });
    // }
    this.toDos.push({
      toDoText: toDoText,
      completed: false
    });
    this.displayToDos();
  },
  //method (property of toDoList) to change toDoText property value(toDoText) in the slected object(position) in the array
  changeToDo: function (position, toDoText) {
    this.toDos[position].toDoText = toDoText;
    //this.toDos[position] = newValue;
    this.displayToDos();
  },

  toggleCompleted: function (position) {
    /**
     *var todoPosition = this.toDos[position]; //saved the variable to todo to save typeing
     *todo.completed = !todo.completed; //access the completed property value and change it to the opposite value with!
     */
    this.toDos[position].completed = !this.toDos[position].completed;
    this.displayToDos();
  },

  toggleAll: function () {
    var totalToDos = this.toDos.length;
    var completedToDos = 0;

    //Get number of completed toDos
    for (let i = 0; i < totalToDos; i++) {
      if (this.toDos[i].completed === true) {
        completedToDos++;
      }
    }

    //Case 1: if ALL toDos are TRUE make EVERYTHING FALESE - check if var completedToDos === totalToDos;
    if (completedToDos === totalToDos) {
      for (let i = 0; i < totalToDos; i++) {
        this.toDos[i].completed = false;

      }
      //Case 2: if Case 1 is false make everthing true;
    } else {
      for (let i = 0; i < totalToDos; i++) {
        this.toDos[i].completed = true;
      }
    }
    this.displayToDos();
  },
  //method (property of toDoList) to delete item in the array
  deleteToDo: function (position) {
    this.toDos.splice(position, 1);
    this.displayToDos();
  }
};

var handlers = {
  displayToDos: function () {
    toDosList.displayToDos();
  },
  addToDo: function () {
    var addToDoTextInput = document.getElementById('addToDoTextInput');
    toDosList.addToDo(addToDoTextInput.value);
    addToDoTextInput.value = "";
  },
  changeToDo: function () {
    var changeToDoPosition = document.getElementById('changeToDoPosition');
    var changeToDoText = document.getElementById('changeToDoText');
    toDosList.changeToDo(changeToDoPosition.valueAsNumber, changeToDoText.value);
    changeToDoPosition.value = "";
    changeToDoText.value = "";
  },
  completeToDo: function () {
    let completeToDoPosition = document.getElementById('completeToDoPosition');
    toDosList.toggleCompleted(completeToDoPosition.valueAsNumber);
    completeToDoPosition.value = "";
  },
  toggleAll: function () {
    toDosList.toggleAll();
  },
  deleteToDo: function () {
    let deleteToDoPosition = document.getElementById('deleteToDoPosition');
    toDosList.deleteToDo(deleteToDoPosition.valueAsNumber);
    deleteToDoPosition.value = "";
  },
}