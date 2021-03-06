'use strict';

//------------------------------------------------------------------------------
// #NAVBARS
//------------------------------------------------------------------------------
var navbarSettings, navbars;

navbars = {
  settings: {
    class: 'navbar',
    dropdownClass: '.navbar-dropdown-menu',
    forms: '.navbar-form',
    toggleButton: '.toggle-navbar',
    toggledClass: '.will-collapse',
    mobileWidth: 750
  },

  init: function init() {
    navbarSettings = this.settings;
    this.toggleActiveLinks();
    this.toggleDropdown();
    this.toggleNavForms();
    this.toggleNavLinksOnBodyClick();
    this.toggleNavBarMobile();
  },

  toggleDropdown: function toggleDropdown() {
    var dropdownBox, dropdownTriggerWith;

    dropdownTriggerWith = '.navbar-dropdown-toggle';

    $('body').on('click', dropdownTriggerWith, function(e) {
      e.preventDefault();
      dropdownBox = $(this).next();
      if (navbars.checkCurrentNavWindowSize()) {
        dropdownBox.slideToggle();
      } else {
        dropdownBox.toggleClass('active');
      }
    });
  },

  toggleActiveLinks: function toggleActiveLinks() {
    var link, linkParent;

    link = '.navbar .navbar-link';

    $('body').on('click', link, function(e) {
      e.stopPropagation();

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).attr('aria-expanded', 'false');
      } else {
        $(link).removeClass('active');
        $(this).addClass('active');
        $(this).attr('aria-expanded', 'true');
        $(navbarSettings.dropdownClass).removeClass('active');
      }
    });
  },

  toggleNavLinksOnBodyClick: function toggleNavLinksOnBodyClick() {
    $('body').on('click', function() {
      $(navbarSettings.dropdownClass).removeClass('active');

      if (navbars.checkCurrentNavWindowSize()) {
        $(navbarSettings.toggledClass).slideUp();
      }
    });
  },

  toggleNavBarMobile: function toggleNavBarMobile() {
    $('body').on('click', navbarSettings.toggleButton, function(e) {
      e.stopPropagation();
      if ($(this).data('target') && $($(this).data('target'))) {
        var openSpecificNav = $($(this).data('target'));
        $(openSpecificNav).slideToggle();
      } else {
        $(navbarSettings.toggledClass).slideToggle();
      }
    });
  },

  toggleNavForms: function toggleNavForms() {
    $('body').on('click', navbarSettings.forms, function(e) {
      e.stopPropagation();
    });
  },

  checkCurrentNavWindowSize: function checkCurrentNavWindowSize() {
    return $(window).width() <= navbarSettings.mobileWidth ? true : false;
  }
};
