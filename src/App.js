//rfc
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import React, { useState } from 'react'
import Button from './Button'
import Container from './Container'
function App() {

  const [items, setItems] = useState({});

  function get(link) {
    fetch("https://ranekapi.origamid.dev/json/api/produto/" + link)
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
          setItems(result);
        },
      );
  }

  const links = [
    "tablet",
    "smartphone",
    "notebook"
  ]
  return (
    <div>
      {links.map(item => {
        return (<Button link={item} key={item} handleClick={get} />)
      })}
      {items.id ?
        <Container item={items} />
        : ''}
    </div>
  )
}

export default App
