/*Os termos estão setados aqui, porém em futura atualização os mesmos estarão
inseridos em um arquivo Json */
const url = 'https://jsonblob.com/api/jsonblob/89eb069b-a7cf-11e8-bac7-e1d00cd5aa77';


const template = (id, word) => (
  `<div style="display: inline;" id="${id}">
    <mark style="background-color: yellow;color:black">
      ${word}
    </mark>
  </div>`
)



fetch(url, {
  method: 'get' // opcional 
})
.then(function(response) { 
  const data = response.json()
  data.then(res => {
    console.log(res)
    res.map(({ word, id }) => {
      console.log({ word, id })
      document.body.innerHTML = document.body.innerHTML.split(word).join(template(id, word));
    })
  })
})
.catch(function(err) { 
  console.error(err); 
});
