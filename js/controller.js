var c = (function() {

  // Iterate through all child todos of a List and render
  // e.g. All todos in Today List
  var initList = function(elId, list) {
    list.forEach(function(todo){
      var id = todo,
        text = m.todos[todo];
      v.renderTodoItem(elId, text, id);
    });
  };

  var init = function() {
    v.init({
      listSelectors: '#today, #week',
      connectionSelector: '.connectedSortable'
    });

    // iterate through each list, e.g. This Week, Today
    for (var list in m.lists) {
      console.log(list, m.lists[list]);
      initList(list, m.lists[list]);
    }
  };

  return {
    init: init
  }
 })();
