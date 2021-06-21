import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCountComponent from '../ItemCount/ItemCountComponent'

function ItemComponent({prod}) {
    
    
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Img src={prod.img}></Card.Img>
            <Card.Title>{prod.articulo}</Card.Title>
            <Card.Text><ItemCountComponent prod={prod} /> </Card.Text>
            <Card.Text>Disponible: {prod.stock} </Card.Text>
            <Card.Text>
                Precio: {prod.precio}
            </Card.Text>
            <Button variant="primary">Saber mas</Button>
        </Card.Body>
        </Card>
    </>
)
}


export default ItemComponent
