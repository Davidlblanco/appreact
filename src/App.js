//rfc

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook


import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Products'
import Contato from './Contato'
import Header from './Header'
import NaoEncontrado from './NaoEncontrado'
import './animation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch('    https://ranekapi.origamid.dev/json/api/produto')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])
  console.log(products)
  return (


    <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Products products={products} />} />
        <Route path="/products/:id/" element={<Products products={products} />} />
        <Route path="/Contato" element={<Contato picture={products[3] ? products[3].fotos[0].src : ''} />} />
        <Route path="/*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>


  )

}

export default App