var v = (function () {

        'use strict';

  var todoItemTemplate =  '<li class="list-group-item" id="%id%"> \
                            <i class="checkbox fa fa-circle-thin" aria-hidden="true"></i> \
                            %text% \
                            <i class="delete fa fa-trash-o pull-right" aria-hidden="true"></i> \
                            </li>',

  inputTemplate =   '<div class="input-group"> \
                          <input type="text" class="form-control" placeholder="Add new todo..."> \
                            <span class="input-group-btn"> \
                              <button class="btn btn-secondary" type="button"> \
                                <i class="fa fa-plus" aria-hidden="true"></i> \
                              </button> \
                            </span> \
                        </div>',


  /*
      makeSortable function - private
      - need to add drop on empty ok and placeholder style
  */

  markeSortable = function (listSelectors, connectionSelector) {
    $(listSelectors).sortable({
      connectWith: connectionSelector,
      placeholder: 'placeholder',
      stop: c.sortUpdateHandler
      }).disableSelection();
  },

  /*
    init function - public

      params
        object with props:
          sortableSelector: jquery selector string of sortable lists
          connectionSelector: class selector for connecting lists
  */
  init = function (config) {
    markeSortable(config.listSelectors, config.connectionSelector);

    $('.inputTodo').html(inputTemplate);
  },

  /*
    render individual todo item using todoItemTemplate
      params
        targetEl - id of the list container to add to the todo item
        todoObj - todo object
  */
  renderTodoItem = function(targetEl, todoObj, id) {
    var text = todoObj.text,
      newTodoItem = todoItemTemplate.replace(/%text%/, text).replace(/%id%/, id);
    $(targetEl).append(newTodoItem);
  },

  /*
    Delete todo item from view
      params
        targetId - id of the todo to delete
  */
  deleteTodoItem = function (targetId) {
    $(targetId).remove();
  },

  /*
    Check item / uncheck item
      params
        targetId - id of the todo to delete
  */
  complete = function (targetId, notComplete) {
    var el = $(targetId);

    if (notComplete) {
      el.removeClass('completed');
      el.children('.checkbox').removeClass('fa-check-circle-o').addClass('fa-circle-thin');
    } else {
      el.addClass('completed');
      el.children('.checkbox').removeClass('fa-circle-thin').addClass('fa-check-circle-o');
    }
  };

  return {
    init: init,
    renderTodoItem: renderTodoItem,
    deleteTodoItem: deleteTodoItem,
    complete: complete
  };
 })();
