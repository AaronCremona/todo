var c = (function() {

  var initList = function(list) {
    var id = list.id;
    list.items.forEach(function(todo){
      v.renderTodoItem(id, m.todos[todo]['text'], m.todos[todo]['id']);
    });
  }

  var init = function() {
    m.lists.forEach(initList);
  }

  return {
    init: init
  }
 })();
