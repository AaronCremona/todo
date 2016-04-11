var ui = (function() {

  /*
    init function - makes lists sortable and connected

    params
      object with props:
        sortableSelector: jquery selector string of sortable lists
        connectionSelector: class selector for connecting lists
  */


  var markeSortable = function(sortableSelector, connectionSelector)  {
    $( sortableSelector ).sortable({
      connectWith: connectionSelector
      }).disableSelection();
  }

  var init = function(config) {
    markeSortable(config.sortableSelector, config.connectionSelector);
    };

  return {
    init: init
  }
 })();
