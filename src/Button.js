import React from 'react'

function Button({ link, handleClick }) {
    let name = link.split('/')[link.split('/').length - 1];
    return (
        <button onClick={() => handleClick(link)}>{name}</button>
    )
}

export default Button
