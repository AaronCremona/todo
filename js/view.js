// refactor to object literal syntax and use object decorator pattern

var v = (function() {

  /*
      makeSortable function - private
  */

  var markeSortable = function(sortableSelector, connectionSelector)  {
    $( sortableSelector ).sortable({
      connectWith: connectionSelector
      }).disableSelection();
  };

  /*
    init function - publically exposed

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
    render todo item using todoItemTemplate
      params
        text - todo text
        targetEl - selector of element to add todo
        id - id to add to the todo item
  */
  
  var renderTodoItem = function(text, targetEl, id) {
    var todoEl = todoItemTemplate.replace(/%text%/, text).replace(/%id%/, id);
    $( targetEl ).append(todoEl);
  }

  return {
    init: init,
    renderTodoItem: renderTodoItem
  }
 })();
