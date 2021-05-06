import React from 'react';
import { useParams } from 'react-router-dom'
function Product({ products }) {
    const { id } = useParams();
    console.log(id)
    return (
        <div className='container d-flex justify-content-start animeLeft'>
            {/* <h1>Produto</h1> */}

            {Object.keys(products).map((product, index) => {
                return (
                    products[product].id === id &&
                    <div key={index} className='d-flex flex-wrap'>
                        <div className='d-flex flex-wrap col-3 mx-4  '>
                            {products[product].fotos.map((foto, index) =>
                                <img key={index} src={foto.src} alt={foto.titulo} style={{ width: '100%', borderRadius: '.4rem' }} className=' mb-4' />
                            )}
                        </div>
                        <div className='d-flex flex-wrap col-6 flex-column'>
                            <h1>{products[product].nome}</h1>
                            <p className='btn-dark text-center px-3' style={{ width: 'fit-content', borderRadius: '.4rem' }}>{'R$: ' + products[product].preco}</p>
                            <p>{products[product].descricao}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Product;
