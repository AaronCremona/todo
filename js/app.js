$(function () {
    'use strict';

    c.init({
        listSelectors: '#today, #week',
        connectionSelector: '.connectedSortable',
        inputIds: '#today-input .input-group-btn, #week-input .input-group-btn'
    });

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


*/
