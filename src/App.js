//rfc
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado



// pt2
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React, { useEffect, useState } from 'react'
import Button from './Button'
import Container from './Container'
function App() {

  const [items, setItems] = useState({});
  const [link, setLink] = useState(window.localStorage.link);

  useEffect(() => {
    localStorage.setItem('link', link);
    fetch("https://ranekapi.origamid.dev/json/api/produto/" + link)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      );
  }, [link]);

  const links = [
    "tablet",
    "smartphone",
    "notebook"
  ]
  return (
    <div>
      {links.map(item => {
        return (<Button link={item} key={item} handleClick={setLink} />)
      })}
      {items.id ?
        <Container item={items} />
        : ''}
    </div>
  )
}

export default App
