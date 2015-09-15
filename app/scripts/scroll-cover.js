'use strict';

//------------------------------------------------------------------------------
// #SCROLL-COVER
//------------------------------------------------------------------------------
var scrollcoverSettings, scrollcoverBehaviour;

scrollcoverBehaviour = {
  settings: {
    body: document.body,
    class: 'scroll-cover'
  },

  init: function init() {
    scrollcoverSettings = this.settings;
    this.addScrollcover();
  },

  addScrollcover: function addScrollcover() {

    window.addEventListener('scroll', function() {
      var timer, cover;
      cover = document.createElement('div');
      cover.setAttribute('class', scrollcoverSettings.class);

      clearTimeout(timer);

      scrollcoverSettings.body.appendChild(cover);

      timer = setTimeout(function(){
        scrollcoverSettings.body.removeChild(cover);
      }, 300);
    }, false);
  }
};
