var ui = (function() {
  var init = function() {
    $( "#today, #week" ).sortable({
      connectWith: ".connectedSortable"
      }).disableSelection();
    };

  return {
    init: init
  }
 })();

$(ui.init);
