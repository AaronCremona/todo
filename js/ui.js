var ui = (function() {

  /*
    init function - makes lists sortable and connected

    params
      object with props:
        sortableSelector: jquery selector string of sortable list
        connectionSelector: selector for connecting lists
  */

  var init = function(config) {
    $( config.sortableSelector ).sortable({
      connectWith: config.connectionSelector
      }).disableSelection();
    };

  return {
    init: init
  }
 })();
