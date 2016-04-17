var c = (function() {

  // Iterate through all child todos of a List and render
  // e.g. All todos in Today List
  var initList = function(elId, list) {
    list.forEach(function(todoId){
      v.renderTodoItem(elId, m.todos[todoId], todoId);
    });
  };

  var init = function() {
    v.init({
      listSelectors: '#today, #week',
      connectionSelector: '.connectedSortable'
    });

    // iterate through each list, e.g. This Week, Today
    for (var list in m.lists) {
      initList(list, m.lists[list]);
    }
  };

  var randomId = function() {
    var generateId = function() {
      return Math.floor(Math.random() * 1000);
    }

    var id = generateId();

    //  generate new ID if duplicate
    while (m.todos.hasOwnProperty(id)) {
      id = generateId();
    }

    return id;
  };

  var addTask = function(targetEl, text) {
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
  };

  return {
    init: init,
    addTask: addTask
  }
 })();
