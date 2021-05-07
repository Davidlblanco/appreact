import React, { useEffect } from 'react'

function Head({ title }) {
    useEffect(() => {

        document.querySelector('title').innerText = title;
    }, [title])
    return (
        <></>
    )
}

export default Head
