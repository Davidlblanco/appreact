import React from 'react'

function Container({ item }) {
    // descricao, fotos, id, nome, preco, usuario_id, vendido
    return (
        <div>

            {item.fotos.map((foto, index) => {
                return (<img alt={foto.titulo} key={index} style={{ width: '200px' }} src={foto.src} />)
            })}

            <p>Descricao: {item.descricao || ''} </p>
            <p>Id: {item.id || ''} </p>
            <p>Nome: {item.nome || ''} </p>
            <p>Preco: {item.preco || ''} </p>
            <p>Usuario_id: {item.usuario_id || ''} </p>
            <p>Vendido: {item.vendido || ''} </p>

        </div>
    )
}

export default Container
