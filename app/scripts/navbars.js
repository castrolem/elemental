'use strict';

//------------------------------------------------------------------------------
// #NAVBARS
//------------------------------------------------------------------------------
var navbarSettings, navbars;

navbars = {
  settings: {
    class: 'navbar',
    dropdownClass: '.navbar-dropdown-menu'
  },

  init: function init() {
    navbarSettings = this.settings;
    this.toggleActiveLinks();
    this.toggleDropdown();
  },

  toggleDropdown: function toggleDropdown() {
    var dropdownBox, dropdownTriggerWith;

    dropdownTriggerWith = '.navbar-dropdown-toggle';

    $('body').on('click', dropdownTriggerWith, function(e) {
      e.preventDefault();
      dropdownBox = $(this).next();
      dropdownBox.toggleClass('active');
    });
  },

  toggleActiveLinks: function toggleActiveLinks() {
    var link, linkParent;

    link = '.navbar .navbar-link';
    linkParent = '.navbar li';

    $('body').on('click', link, function() {
      $(navbarSettings.dropdownClass).removeClass('active');
      $(linkParent).removeClass('active');
      $(this).parent().toggleClass('active');
    });
  }
};
