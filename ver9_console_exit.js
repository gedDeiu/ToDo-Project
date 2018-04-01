var toDosList = {
  //array we work with;
  toDos: [],
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
  },

  toggleCompleted: function (position) {
    /**
     *var todoPosition = this.toDos[position]; //saved the variable to todo to save typeing
     *todo.completed = !todo.completed; //access the completed property value and change it to the opposite value with!
     */
    this.toDos[position].completed = !this.toDos[position].completed;
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
  },
  //method (property of toDoList) to change toDoText property value(toDoText) in the slected object(position) in the array
  changeToDo: function (position, toDoText) {
    this.toDos[position].toDoText = toDoText;
    //this.toDos[position] = newValue;
  },
  
  //method (property of toDoList) to delete item in the array
  deleteToDo: function (position) {
    this.toDos.splice(position, 1);
  },
  clearAllToDos: function () {
    for (let i = this.toDos.length; i >= 0; i--) {
      this.toDos.splice(0, 1)       
    }
  }
};

var handlers = {
  addToDo: function () {
    var addToDoTextInput = document.getElementById('addToDoTextInput');
    toDosList.addToDo(addToDoTextInput.value);
    addToDoTextInput.value = "";
    view.displayToDos();
  },
  changeToDo: function () {
    var changeToDoPosition = document.getElementById('changeToDoPosition');
    var changeToDoText = document.getElementById('changeToDoText');
    toDosList.changeToDo(changeToDoPosition.valueAsNumber, changeToDoText.value);
    changeToDoPosition.value = "";
    changeToDoText.value = "";
    view.displayToDos();
  },
  completeToDo: function () {
    let completeToDoPosition = document.getElementById('completeToDoPosition');
    toDosList.toggleCompleted(completeToDoPosition.valueAsNumber);
    completeToDoPosition.value = "";
    view.displayToDos();
  },
  toggleAll: function () {
    toDosList.toggleAll();
    view.displayToDos();
  },
  deleteToDo: function () {
    let deleteToDoPosition = document.getElementById('deleteToDoPosition');
    toDosList.deleteToDo(deleteToDoPosition.valueAsNumber);
    deleteToDoPosition.value = "";
    view.displayToDos();
  },
  clearAllToDos: function () {
    toDosList.clearAllToDos();
    view.displayToDos();
  }
}

var view = {
  displayToDos: function () {
    const toDosUl = document.querySelector('ul');
    toDosUl.innerHTML = '';

    for (let i = 0; i < toDosList.toDos.length; i++) {
      var toDoLi = document.createElement('li');
      var toDoTextWithCompletion = ''; // '(x) todoText';

      if (toDosList.toDos[i].completed === true) {
        toDoTextWithCompletion = '(x) ' + toDosList.toDos[i].toDoText;
      } else {
        toDoTextWithCompletion = '( ) ' + toDosList.toDos[i].toDoText;
      }

      toDoLi.textContent = toDoTextWithCompletion;
      toDosUl.appendChild(toDoLi);

    }
  }
}

// highOrderFunction(callBackFunction());
function runWithDebugger(ourFunction) {
  debugger;
  ourFunction();
}

setTimeout(() => {
  console.log('Weke up Deiu!!!');
}, 5000);

function forEachFunction(myArray, myFunction) {
  for (let i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}