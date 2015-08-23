'use strict';

//------------------------------------------------------------------------------
// #TABS
//------------------------------------------------------------------------------
var tabsSettings, tabsBehaviour;

tabsBehaviour = {
  settings: {
    class: 'nav a',
    navParent: '.tabs nav li',
    navLink: '.tabs nav a',
    tabContent: '.tabs .content section'
  },

  init: function init() {
    tabsSettings = this.settings;
    this.activateTabs();
  },

  activateTabs: function activateTabs() {
    $('body .tabs').on('click', tabsSettings.class, function(e) {
      e.preventDefault();

      $(tabsSettings.navParent).removeClass('active'); // Remove all active links
      $(this).parent().addClass('active');

      $(tabsSettings.tabContent).removeClass('active'); // Remove all active tabs
      var currentTab = $(this).attr('href');
      $(currentTab).addClass('active');
    });
  }
};
