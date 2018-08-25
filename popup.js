'use strict';

search.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript({ file: 'check.js' });
  });
};
