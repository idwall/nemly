'use strict';

const url = 'https://nemly-json.now.sh';

const colors = [
  '#ffc300',
  '#ffba04',
  '#ffb108',
  '#ffa80d',
  '#ff9f11',
  '#ff9615',
  '#ff8d1a',
  '#ff841e',
  '#ff7b22',
  '#ff7226',
  '#ff692b',
  '#ff602f',
  '#ff5733',
];

const template = (id, word, colorhex) => (
  `<div style="display: inline;" id="${id}">
    <mark style="background-color: ${colorhex}; color: black;">
      ${word}
    </mark>
  </div>`
);

fetch(url).then((response) => { 
  const data = response.json()
  data.then(res => {
    res.map(({ word, id, relevance }) => {
      const selected = (relevance >= 0 && relevance <= 1) ? (relevance * 10) : 0;
      const colorhex = colors[selected];
      document.body.innerHTML = document.body.innerHTML.split(word).join(template(id, word, colorhex));
    });

    chrome.runtime.sendMessage(`Foram encontradas ${res.length} correspondências`);
  });
}).catch(err => console.error(err));
