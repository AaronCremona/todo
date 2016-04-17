$(function () {
    'use strict';

    c.init();

    // populate some sample tasks
    c.addTask('#today', 'Create clever sample to do\'s');
    c.addTask('#today', 'Throw tennis ball for dog');
    c.addTask('#week', 'Buy milk');
    c.addTask('#week', 'Make plans to takeover the world');
    c.addTask('#week', 'File taxes');

});


/*

todos -

view module
  - clear completed

controller
  - complete / uncomplete method
  - click handler for add task button
  - click handler for delete-task
  - click handler for check uncheck

*/
