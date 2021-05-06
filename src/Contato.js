import React from 'react'

function Contato({ picture }) {
    return (
        <div className='container d-flex justify-content-center  animeLeft'>
            <img src={picture} width='200px' />
            <div className='mx-2'>
                <h1>Contato</h1>
                <p>11 99999-9999</p>
                <p>teste@teste.com</p>
            </div>
        </div>
    )
}

export default Contato
