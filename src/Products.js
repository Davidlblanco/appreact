import React from 'react'
import Card from 'react-bootstrap/Card'

function Products({ products }) {
    return (
        <div className='container d-flex flex-wrap justify-content-center animeLeft'>
            {Object.keys(products).map((produt, index) => {
                return (
                    <Card key={index} className='m-1' style={{ width: '15rem' }}>

                        <Card.Img src={products[produt].fotos[0].src} />

                        <Card.Title className='m-2'>{products[produt].nome}</Card.Title>
                        <Card.Text className='m-2'>
                            {products[produt].descricao}
                        </Card.Text>
                    </Card>
                )
            })}
        </div>

    )
}

export default Products
