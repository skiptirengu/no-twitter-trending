// ==UserScript==
// @name         No twitter trending
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove trending thingy from twitter
// @author       You
// @match        *.twitter.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// ==/UserScript==

(function() {
    'use strict';
    var handle = setInterval(function () {
        var $trending = window.jQuery('div[aria-label="Timeline: Trending now"]');
        if ($trending.length > 0) {
            $trending.remove();
            clearInterval(handle);
        }
    }, 200);
})();
