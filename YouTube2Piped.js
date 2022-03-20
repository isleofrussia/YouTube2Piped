// ==UserScript==
// @name         YouTube2Piped
// @namespace    https://isleofrussia.github.io/YouTube2Piped
// @version      0.1
// @description  Redirect YouTube links to Piped
// @author       https://isleofrussia.github.io/
// @grant        none
// @run-at       document-start
// @include      *://www.youtube.com/*
// @include      *://*.youtube.com/*
// @include      *://*.youtu.be/*
// ==/UserScript==
window.location.replace("https://piped.kavin.rocks" + window.location.pathname + window.location.search);
