'use strict';

//------------------------------------------------------------------------------
// #STYLE-GUIDE
//------------------------------------------------------------------------------
var styleGuideSettings, styleGuide;

styleGuide = {
  settings: {

  },

  init: function init() {
    styleGuideSettings = this.settings;
    this.toggleCalloutsAnimation();
  },

  toggleCalloutsAnimation: function toggleCalloutsAnimation() {
    $('body').on('click', '#toggle-callout-animations', function() {
      $('.callout.with__animations').toggleClass('active');
    });
  }
};
