const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

function App() {
  // > 1500 + lista de cores
  return (
    <div>
      {
        produtos.map(item => {
          return (
            Number(item.preco.replace('R$ ', '')) > 1500 &&
            <div key={item.id}>
              <h1>{item.nome}</h1>
              <p>Preço: {item.preço}</p>
              <ul>{
                item.cores.map(color => {
                  return <li style={{ background: color, color: '#fff' }}> {color}</li>
                })
              }</ul>
            </div>)
        })
      }
    </div >
  );
}

export default App;
