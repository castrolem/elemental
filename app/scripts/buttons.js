var buttonSettings,
buttonAnimation = {

  settings: {
    class: 'animate',
    triggerWith: 'ink',
    element: '.button',
    event: 'click'
  },

  init: function() {
    buttonSettings = this.settings;
    this.animateButtons();
  },

  animateButtons: function buttonAnimation() {
    var ink, sizing, x, y;

    // for input buttons
    $('body').on(buttonSettings.event, buttonSettings.element, function(e) {
      if ($(this).find('.' + buttonSettings.triggerWith).length === 0) {
        $(this).append('<span class="' + buttonSettings.triggerWith + '"></span>');
      }

      ink = $(this).find('.' + buttonSettings.triggerWith);
      ink.removeClass(buttonSettings.class);

      if (!ink.height() && !ink.width()) {
        sizing = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({
          height: sizing,
          width: sizing
        });
      }

      x = e.pageX - $(this).offset().left - ink.width() / 2;
      y = e.pageY - $(this).offset().top - ink.height() / 2;

      ink.css({
        top: y + 'px',
        left: x + 'px'
      }).addClass(buttonSettings.class);
    })
  }
};
