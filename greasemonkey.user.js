// ==UserScript==
// @name        t.co bypass
// @namespace   http://darcsys.com
// @include     https://twitter.com/*
// @include     https://tweetdeck.com/*
// @include     https://tweetdeck.twitter.com/*
// @include     https://t.co/*
// @version     0.1
// @grant       none
// ==/UserScript==

var serveraddr = "http://207.154.195.181:8081"

var observer = new MutationObserver(function(mutations) {
  var aTags = document.body.getElementsByTagName("a");
  for (var i = 0; i < aTags.length; i++) {
    var tag = aTags[i];
    console.log(tag);
    if (tag.getAttribute("class") !== null && tag.getAttribute("class").indexOf("twitter-atreply") > -1) {
      continue;
    }

    if (tag.href && tag.href.indexOf("://t.co/") > -1) {
      if (tag.getAttribute("data-expanded-url") !== "" && tag.getAttribute("data-expanded-url") !== null) {
        tag.href = tag.getAttribute("data-expanded-url");
      } else if (tag.getAttribute("data-full-url") !== "" && tag.getAttribute("data-full-url") !== null) {
        tag.href = tag.getAttribute("data-full-url");
      } else if (tag.getAttribute("title") !== "" && tag.getAttribute("title") !== null) {
        tag.href = tag.getAttribute("title");
      } else {
        //http://207.154.195.181 is A TEMPORARY SERVER - ITS WORKING IS NOT GUARANTEED 
        tag.href = tag.href.replace("https://t.co", serveraddr);
      }
    }
  };
});

var config = { 
  childList: true,
  subtree: true
};

observer.observe(document.body, config);
