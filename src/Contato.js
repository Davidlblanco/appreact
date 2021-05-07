import React from 'react'
import Head from './Head'
function Contato({ picture }) {
    return (
        <div className='container d-flex justify-content-center  animeLeft'>
            <Head title='Contact' />
            <img src={picture.src} alt={picture.titulo} width='200px' style={{ borderRadius: '.4rem' }} />
            <div className='mx-2'>
                <h1>Contato</h1>
                <p>11 99999-9999</p>
                <p>teste@teste.com</p>
            </div>
        </div>
    )
}

export default Contato
