'use strict';
//------------------------------------------------------------------------------
// #MAIN
//------------------------------------------------------------------------------

$( document ).ready(function() {
  buttonAnimation.init(); // button material effect
  disabledLinksBehaviour.init(); // disabled links are not clickable
  tabsBehaviour.init(); // enable responsive tabs
  dropdownsBehaviour.init(); // enable dropdowns
  navbars.init(); // enable navbar functionality

  styleGuide.init(); // enable style-guide animations
});
