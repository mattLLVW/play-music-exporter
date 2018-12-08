'use strict';

// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function () {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains play.google.com/music/listen
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlMatches: 'play\.google\.com/music/listen'},
          })
        ],
        // And shows the extension's page action.
        actions: [
          new chrome.declarativeContent.ShowPageAction(),
        ]
      }
    ]);
  });
});
