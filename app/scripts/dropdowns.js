'use strict';

//------------------------------------------------------------------------------
// #DROPDOWNS
//------------------------------------------------------------------------------
var dropdownsSettings, dropdownsBehaviour;

dropdownsBehaviour = {
  settings: {
    triggerWith: '.dropdown-toggle',
    class: '.dropdown-menu'
  },

  init: function init() {
    dropdownsSettings = this.settings;
    this.toggleDropdown();
  },

  toggleDropdown: function toggleDropdown() {
    $('body').on('click', dropdownsSettings.triggerWith, function(e) {
      e.preventDefault();

      var dropdownBox = $(this).next();

      dropdownBox.toggleClass('active');
    });
  }
};
