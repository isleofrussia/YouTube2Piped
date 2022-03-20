// ==UserScript==
// @name         YT2Piped
// @namespace    https://isleofrussia.github.io/
// @version      0.1
// @description  Redirect YouTube to Piped instance
// @author       MZ
// @grant       none
// @run-at      document-start
// @include     *://www.youtube.com/*
// @include     *://*.youtube.com/*
// @include     *://*.youtu.be/*
// ==/UserScript==
window.location.replace("https://piped.kavin.rocks" + window.location.pathname + window.location.search);