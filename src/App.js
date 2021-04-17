// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import React from "react";
import Header from "./Header";
import Product from "./Product";
import Home from "./Home";

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function App() {
  const { pathname } = window.location;
  return (
    <React.Fragment>
      <Header />
      {
        pathname == "/product" ?
          <Product products={produtos} /> :
          <Home />
      }
    </React.Fragment>
  );
}

export default App;
