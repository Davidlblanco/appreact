import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <NavLink to='/'>home</NavLink> | <NavLink to='sobre'>Sobre</NavLink>
        </div>
    )
}

export default Header
