//rfc
import React, { useState } from 'react'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];
function App() {
  const [stage, setStage] = useState(0);
  const [answer, setAnswer] = useState({});

  function checkResult(answer) {
    let correct = 0;
    perguntas.forEach((item, index) => {
      if (item.resposta === answer[index]) {
        correct++
      }
    })
    return correct
  }

  return (
    stage < 4 ?
      <React.Fragment>
        <h1>{perguntas[stage].pergunta}</h1>
        {perguntas[stage].options.map((option, index) => {
          return (
            <label key={index}>
              <input type={'radio'}
                name={perguntas[stage].pergunta}
                value={option}
                checked={answer[stage] === option ? true : false}
                onChange={({ target }) => { setAnswer({ ...answer, [stage]: option }) }} />
              {option}
            </label>
          )
        })}
        <button onClick={() => { const newStage = stage + 1; setStage(newStage) }} disabled={!answer[stage]} >Próximo </button>
      </React.Fragment>
      : <React.Fragment>Resultado final: {checkResult(answer)} respostas corretas de {perguntas.length}.</React.Fragment>
  )




}

export default App
