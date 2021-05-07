import React from 'react'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
import Head from './Head'
import Spinner from 'react-bootstrap/Spinner'
function Products({ products }) {
    return (
        <div className='container d-flex flex-wrap justify-content-center animeLeft'>
            <Head title='Products' />
            { products.length > 0 ?

                Object.keys(products).map((produt, index) => {
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
                })

                : <div className='fixed d-flex align-content-center'> <Spinner animation="border" variant="info" className='mx-2' /><p className='mt-1'>LOADING...</p></div>
            }
        </div>
    )
}

export default Products
