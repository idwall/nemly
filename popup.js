'use strict';

(() => {
  const _search = document.querySelector('[data-js="search"]')
  const _result = document.querySelector('[data-js="result"]')
  _result.style.display = 'none';
  
  search.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.executeScript({ file: 'check.js' });
    });

    _search.parentElement.removeChild(_search);
    _result.style.display = 'block';
  };

})()
