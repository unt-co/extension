chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {redirectUrl: details.url.replace("https://t.co", "http://207.154.195.181:8081")};
    },
    {
      urls: [
        "<all_urls>",
      ],
      types: ["main_frame"]
    },
    ["blocking"]
  );