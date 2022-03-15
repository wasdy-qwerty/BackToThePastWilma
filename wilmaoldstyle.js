// ==UserScript==
// @name         Undo the bad changes
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Removes the horrible wilma changes
// @author       HehYaAintFindinTheTrueMee
// @match        *.inschool.fi/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=inschool.fi
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var x;
    //remove ugly cursive logo
    x=document.getElementsByClassName("navbar-brand"); // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Wilma"; // Change the content
    }
    //change the navbar color
    x=document.getElementsByClassName("navbar"); // Find the elements
    for(var ii = 0; ii < x.length; ii++){
    x[ii].style='background-color: #0071b3'; // Change the content
    }
})();