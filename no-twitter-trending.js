// ==UserScript==
// @name         No twitter trending
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove trending thingy from twitter
// @author       skiptirengu
// @match        *.twitter.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.4.1.slim.min.js
// @updateURL    https://raw.githubusercontent.com/skiptirengu/no-twitter-trending/master/no-twitter-trending.js
// ==/UserScript==

(function() {
    'use strict';

    var interval = null;

    function waitLoading() {
        if (interval) {
            clearInterval(interval);
        }

        interval = setInterval(function () {
            var $trending = window.jQuery('div[aria-label="Timeline: Trending now"]');
            if ($trending.length > 0) {
                $trending.remove();
                clearInterval(interval);
            }
        }, 200);
    }

    window.jQuery(document).on('click', 'a', waitLoading);
    waitLoading();
})();
