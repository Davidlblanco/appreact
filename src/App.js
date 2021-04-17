const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

let ativa = (dados) => {
    return dados.ativa ? 'Ativa' : 'Inativa';
}

let total = (dados) => {
    let total = 0;
    dados.compras.forEach(element => {
        total = total + parseInt(element.preco.split('R$ ')[1])
    });
    return total;
}

function App() {
    const dados = luana;
    return (
        <div className="App">
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade}</p>
            <p className={ativa(dados).toLocaleLowerCase()}>Situação: <span>{ativa(dados)}</span></p>
            <p>Total gasto: {'R$ ' + total(dados)}</p>
            {total(dados) > 10000 && <p>  "Voce está gastando muito"</p>}
        </div>
    );
}

export default App;
