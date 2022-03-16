// ==UserScript==
// @name         DarkModeWilma
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  darkmode for wilma
// @author       WasdyQwerty
// @match        *.inschool.fi/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

(function() {
    'use strict';
  document.body.style.backgroundColor = "#262626";
  //remove logo
  var x;
  x=document.getElementsByClassName("navbar-brand"); // Find the elements
  for(var i = 0; i < x.length; i++){
    x[i].innerText="WilmaDark"; // Change the content
  }
  //make labels white
  x=document.getElementsByTagName("label"); // Find the elements
  for(var v = 0; v < x.length; v++){
    x[v].style.color='#ffffff'; // Change the content
  }
    //css magik
  function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }
    addGlobalStyle('.no-events { background-color: #05003f !important; }');
    addGlobalStyle('.panel { background-color: #070055 !important; }');
    addGlobalStyle('.weekday, .legend, h3  { color: #ffffff; !important;}');
    addGlobalStyle('.form-group, .secondary-text  { color: #ffffff; !important;}');
    addGlobalStyle('.side-padding, .secondary-headline, .sub-text, .total, h2, p, .panel-side  { color:#000000; filter:invert(1); !important;}');
    addGlobalStyle('h1:not(.side-padding)  { color:#ffffff; !important;}');
    addGlobalStyle('.table  { color:#05003; !important;}');
    addGlobalStyle('.choices-tree, .well { background-color: #05003f !important; }');
    //
    addGlobalStyle('.m-replybox, .m-replybox-me { background-color: #05003f !important; }');
    addGlobalStyle('.panel-side { background-color: #f8ffaa !important; }'); //lazy fix for schedule
    //text-style-link
    //addGlobalStyle('tbody tr:odd  { color:#070055; !important;}');
    //kalenteri roinaa
    addGlobalStyle('.vismaDatePickerHeader  { color: #ffffff !important; }');
    addGlobalStyle('.vismaDatePickerDays  { color: #ffffff !important; }');
    addGlobalStyle('.vismaDatePickerHover  { color: #000000 !important; }');
    addGlobalStyle('.datepick-dow-1, .datepick-dow-2, .datepick-dow-3, .datepick-dow-4, .datepick-dow-5, .datepick-dow-6, .datepick-dow-0  { color: #ffffff !important; }');
    addGlobalStyle('.vismaDatePickerCmd  { filter:invert(1); !important;}');

})();
