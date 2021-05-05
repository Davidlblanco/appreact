import React from 'react';
function Product({ products }) {
    return (
        <React.Fragment>
            <h1>Produto</h1>
            <ul>
                {products.map(product => {
                    return (
                        <li>
                            <p>{product.nome}</p>
                            {product.propriedades.map(propriedade => {
                                return <p>{propriedade}</p>
                            })}
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    );
}

export default Product;
