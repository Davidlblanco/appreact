//rfc
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
// Mostre uma mensagem na tela, caso a resposta da API seja positiva
import React, { useState } from 'react'
import { Storage } from './Context'

function App() {
  const [form, setForm] = useState({
    nome: '', email: '', senha: '', cep: '', rua: '', numero: '', bairro: ''
  })

  const [response, setResponse] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    // Essa é a função utilizado para realizar o POST
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((res) => {
      console.log(res)
      setResponse(res.status)
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value })
  }

  function setType(item) {
    switch (item) {
      case 'numero':
        return 'number'
      case 'email':
        return item;
      case 'senha':
        return 'password';
      default:
        return 'text';
    }
  }

  return (
    <Storage>
      <form >
        {Object.keys(form).map((item) => {
          return (
            <label key={item} htmlFor={item}>
              {item}
              <input
                type={setType(item)}
                value={form[item]}
                id={item}
                onChange={handleChange}>
              </input>
            </label>
          )
        })}
        {response != '' ? response == '200' ? <p>Enviado com sucesso!</p> : <p>Falha no Envio, tente novamente!</p> : ''}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </Storage>
  )
}

export default App
