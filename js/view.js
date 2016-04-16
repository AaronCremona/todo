var v = (function() {

  /*
      makeSortable function - private
      - need to add drop on empty ok and placeholder style
  */

  var markeSortable = function(sortableSelector, connectionSelector)  {
    $( sortableSelector ).sortable({
      connectWith: connectionSelector
      }).disableSelection();
  };

  /*
    init function - public

      calls method to make the lists sortable

      params
        object with props:
          sortableSelector: jquery selector string of sortable lists
          connectionSelector: class selector for connecting lists
  */

  var init = function(config) {
    markeSortable(config.sortableSelector, config.connectionSelector);
    };

  /*
    todo item view template
  */
  var todoItemTemplate = '<li class="list-group-item" id="%id%">%text%</li>';

  /*
    render individual todo item using todoItemTemplate
      params
        targetEl - id of the list container to add to the todo item
        todoObj - todo object
  */

  var renderTodoItem = function(targetEl, todoObj) {
    var text = todoObj.text,
      id = todoObj.id,
      newTodoItem = todoItemTemplate.replace(/%text%/, text).replace(/%id%/, id);
    $( targetEl ).append(newTodoItem);
  };



  return {
    init: init,
    renderTodoItem: renderTodoItem
  }
 })();
