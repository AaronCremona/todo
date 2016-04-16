var v = (function() {

  /*
      makeSortable function - private
      - need to add drop on empty ok and placeholder style
  */

  var markeSortable = function(listSelectors, connectionSelector)  {
    $( listSelectors ).sortable({
      connectWith: connectionSelector
      }).disableSelection();
  };

  /*
    init function - public

      params
        object with props:
          sortableSelector: jquery selector string of sortable lists
          connectionSelector: class selector for connecting lists
  */
  var init = function(config) {
    markeSortable(config.listSelectors, config.connectionSelector);

    $( '.inputTodo' ).html(inputTemplate);
    };


  var todoItemTemplate = '<li class="list-group-item" id="%id%">%text% \
    <i class="fa fa-trash-o pull-right" aria-hidden="true"></i></li>';

  var inputTemplate =   '<div class="input-group"> \
                          <input type="text" class="form-control" placeholder="Add new todo..."> \
                            <span class="input-group-btn"> \
                              <button class="btn btn-secondary" type="button">Go!</button> \
                            </span> \
                        </div>'

  /*
    render individual todo item using todoItemTemplate
      params
        targetEl - id of the list container to add to the todo item
        todoObj - todo object
  */
  var renderTodoItem = function(targetEl, todoObj, id) {
    var text = todoObj.text,
      newTodoItem = todoItemTemplate.replace(/%text%/, text).replace(/%id%/, id);
    $( targetEl ).append(newTodoItem);
  };

  /*
    Delete todo item from view
      params
        targetId - id of the todo to delete
  */
  var deleteTodoItem = function(targetId) {
    $( targetId ).remove();
  };


  return {
    init: init,
    renderTodoItem: renderTodoItem,
    deleteTodoItem: deleteTodoItem
  }
 })();
