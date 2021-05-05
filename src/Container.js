import React, { useContext } from 'react'
import { Context } from './Context'

function Container() {
    const global = useContext(Context);
    console.log(global)
    if (global.productData == null) {
        return null;
    }
    return (
        <div>
            <div>{
                global.productData.map((item, index) => {
                    return <p key={index}>{item.nome}</p>
                }
                )}</div>
            <button onClick={global.clearData}>Limpar</button>
        </div>
    )
}

export default Container
