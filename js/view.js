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

  return {
    init: init
  }
 })();
