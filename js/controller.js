var c = (function() {

  // Iterate through all child todos of a List and render
  // e.g. All todos in Today List
  var initList = function(list) {
    var elId = list.id;
    list.items.forEach(function(todo){
      var id = todo;
      v.renderTodoItem(elId, m.todos[todo], todo);
    });
  }

  // iterate through each list, e.g. This Week, Today
  var init = function() {
    
    m.lists.forEach(initList);
  }

  return {
    init: init
  }
 })();
