import React from 'react'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'

function Products({ products }) {
    return (
        <div className='container d-flex flex-wrap justify-content-center animeLeft'>
            {Object.keys(products).map((produt, index) => {
                return (
                    <NavLink key={index} to={'products/' + products[produt].id} style={{ textDecoration: 'none' }} className='text-reset'>
                        <Card className='m-1' style={{ width: '15rem' }}>
                            <Card.Img src={products[produt].fotos[0].src} />
                            <Card.Title className='m-2'>{products[produt].nome}</Card.Title>
                            <Card.Text className='m-2'>
                                {products[produt].descricao}
                            </Card.Text>
                        </Card>
                    </NavLink>
                )
            })}
        </div>

    )
}

export default Products
