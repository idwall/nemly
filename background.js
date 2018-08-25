'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(_, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          // Aqui podem ser adicionadas condições para que a extenssão seja ativada
        })
      ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });

    chrome.runtime.onConnect.addListener(port => {
      port.onMessage.addListener(msg => {
        port.postMessage({ counter: msg.counter + 1 });
      });
    });

    chrome.extension.onRequest.addListener((request, sender, sendResponse) => {
      zsendResponse({ counter: request.counter + 1 });
    });

    chrome.runtime.onMessage.addListener((response, sender, sendResponse) => {
      alert(response);
    });
});
