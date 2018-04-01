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
    this.toDos.forEach(function (toDo) {
      if (toDo.completed === true) {
        completedToDos++;
      }
    });
    //Case 1: if ALL toDos are TRUE make EVERYTHING FALESE - check if var completedToDos === totalToDos;
    /*
      if (completedToDos === totalToDos) {
        this.toDos.forEach(function (toDo) {
          toDo.completed = false;
        });
    //Case 2: if Case 1 is false make everthing true;
      } else {
        this.toDos.forEach(function(toDo){
          toDo.completed = true;
          });
      }
    */
    this.toDos.forEach(function (toDo) {
      if (completedToDos === totalToDos) {
        toDo.completed = false;
      } else {
        toDo.completed = true;
      }
    })


  },
  //method (property of toDoList) to change toDoText property value(toDoText) in the slected object(position) in the array
  changeToDo: function (position, toDoText) {
    this.toDos[position].toDoText = toDoText;
    //this.toDos[position] = newValue;
  },

  //method (property of toDoList) to delete item in the array
  deleteToDo: function (position) {
    var conDel = confirm('Are you sure?');
    if (conDel === true) {
      this.toDos.splice(position, 1);
    }
  },
  clearAllToDos: function () {
    var conDel = confirm('Are you sure?');
    if (conDel === true) {
      for (let i = this.toDos.length - 1; i >= 0; i--) {
        this.toDos.splice(0, 1)
      }
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
  deleteToDo: function (position) {
    toDosList.deleteToDo(position);
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
    /*
      for (let i = 0; i < toDosList.toDos.length; i++) {
      var toDoLi = document.createElement('li');
      var toDoTextWithCompletion = ''; // '(x) todoText' or ( ) todoText' ;
      
      if (toDosList.toDos[i].completed === true) {
        toDoTextWithCompletion = '(x) ' + toDosList.toDos[i].toDoText + ' ';
      } else {
        toDoTextWithCompletion = '( ) ' + toDosList.toDos[i].toDoText + ' ';
      }
      toDoLi.id = i;
      toDoLi.textContent = toDoTextWithCompletion;
      toDoLi.appendChild(this.createDeleteButton('button'))
      toDosUl.appendChild(toDoLi); 
    } 
    */

    toDosList.toDos.forEach(function (toDos, position) {
      let toDoLi = document.createElement('li');
      let toDoContent = document.createElement('div');
      let toDoSpan = document.createElement('span');
      let completedDiv = document.createElement('div');
      let inProgressDiv = document.createElement('div');

      toDoSpan.innerHTML = position;

      completedDiv.innerHTML = 'Completed!'
      inProgressDiv.innerHTML = 'In Progress...'

      completedDiv.className = 'compeletedDiv';
      inProgressDiv.className = 'inProgressDiv';

      toDoSpan.className = 'cardHeader toDoIndex';
      toDoContent.className = 'cardContent';

      let toDoTextWithCompletion = '';

      if (toDos.completed === true) {
        toDoTextWithCompletion = toDos.toDoText;
        toDoLi.className = 'listCard completed';
      } else {
        toDoTextWithCompletion = toDos.toDoText;
        toDoLi.className = 'listCard uncompleted';
      }
      toDoLi.id = position;
      toDoContent.innerHTML = toDoTextWithCompletion
      toDoLi.appendChild(toDoContent);
      toDoLi.appendChild(this.createDeleteButton('button'));
      toDoLi.prepend(toDoSpan);
      toDosUl.appendChild(toDoLi);
    }, this)
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&times;';
    deleteButton.className = 'cardHeader deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function () {
    var toDosUl = document.querySelector('ul');
    //////higherOrderFunction/////////callBackFunction ---- EVENT DELAGATION --- to the parent 
    toDosUl.addEventListener('click', function (envent) {
      //console.log(event(OBJECT).target.parentNode.id);

      //get element that was clicked on
      var elementClicked = event.target

      //check if element clicked was a button
      if (elementClicked.className === 'cardHeader deleteButton') {
        //run handlers.deleteToDo(position)
        handlers.deleteToDo(parseInt(elementClicked.parentNode.id))
      }
    });
  }
};

view.setUpEventListeners();