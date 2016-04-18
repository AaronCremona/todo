var c = (function() {

  'use strict';

  // Iterate through all child todos of a List and render
  // e.g. All todos in Today List
  var initList = function(elId, list) {
    list.forEach(function(todoId){
      v.renderTodoItem(elId, m.todos[todoId], todoId);
    });
  },

  init = function(settings) {
    v.init({
      listSelectors: settings.listSelectors,
      connectionSelector: settings.sortableSelector
    });

    // iterate through each list, e.g. This Week, Today
    for (var list in m.lists) {
      initList(list, m.lists[list]);
    }

    // click handlers
    $('#today, #week').on('click', todoClickHandler);
    $('')
  },

  todoClickHandler = function(e) {
      var parentEl = '#' + e.currentTarget.id,
        button = e.target.classList[0],
        id = e.target.parentElement.id;

        console.log(parentEl, button, id);

      switch(button) {
        case 'delete':
          destroyTask(parentEl, id);
          break;
        case 'checkbox':
          if (e.target.parentElement.className.indexOf('completed') === -1) {
            completeTask(id);
          } else {
            completeTask(id, 'uncomplete it');
          }
          break;
      }

      e.stopPropagation();
  },

  randomId = function() {
    var generateId = function() {
      return Math.floor(Math.random() * 1000);
    }

    var id = generateId();

    //  generate new ID if duplicate
    while (m.todos.hasOwnProperty(id)) {
      id = generateId();
    }

    return id;
  },

  addTask = function(targetEl, text) {
    var id = randomId().toString();

    // add task to todos in model
    m.todos[id] = {
      text: text,
      isComplete: false
    }

    // push task to proper list in model
    m.lists[targetEl].push(id);

    // render task in view
    v.renderTodoItem(targetEl, m.todos[id], id);
  },

  destroyTask = function (el, id) {
    // delete task from list array
    var index = m.lists[el].indexOf(id);
    m.lists[el].splice(index, 1);

    // delete task from todo object
    delete m.todos[id];

    // remove task from view
    v.deleteTodoItem('#' + id);
  },

  completeTask = function (targetId, notcomplete) {
    // update model to reflect complete or incomplete
    if (notcomplete) {
      m.todos[targetId].isComplete = false;
    } else {
      m.todos[targetId].isComplete = true;
    }

    // update view
    v.complete('#' + targetId, notcomplete);
  };

  return {
    init: init,
    addTask: addTask,
    destroyTask: destroyTask,
    completeTask: completeTask
  }
 })();
