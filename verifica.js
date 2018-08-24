/*Os termos estão setados aqui, porém em futura atualização os mesmos estarão
inseridos em um arquivo Json */
const url = 'https://jsonblob.com/api/jsonblob/89eb069b-a7cf-11e8-bac7-e1d00cd5aa77';

const template = (id, word, colorhex) => (
  `<div style="display: inline;" id="${id}">
    <mark style="background-color:#${colorhex};color:black">
      ${word}
    </mark>
  </div>`
)

const colors = ['ffc300','ffba04','ffb108','ffa80d','ff9f11','ff9615','ff8d1a','ff841e','ff7b22','ff7226','ff692b','ff602f','ff5733'];

fetch(url, {
  method: 'get' // opcional 
})
.then(function(response) { 
  const data = response.json()
  data.then(res => {
    console.log(res)
    res.map(({ word, id, relevance }) => {
      console.log({ word, id, relevance })

      const selected = ( relevance >= 0 && relevance <= 1 ) ? relevance * 10 : 0;
      const colorhex = colors[selected];

      document.body.innerHTML = document.body.innerHTML.split(word).join(template(id, word, colorhex));
    })
  })
})
.catch(function(err) { 
  console.error(err); 
});
