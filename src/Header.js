import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function Header() {
    const params = useParams();
    console.log('params', params)
    return (
        <div className='container d-flex justify-content-center mt-5 mb-4 animeLeft'>
            <NavLink className='mx-1 btn btn-info ' style={{ color: '#fff', textDecoration: 'none' }} to='/'>Home</NavLink>
            <NavLink className='mx-1 btn btn-info ' style={{ color: '#fff', textDecoration: 'none' }} to='Contato'>Contato</NavLink>
        </div>
    )
}

export default Header
