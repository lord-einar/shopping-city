import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCountComponent from '../ItemCount/ItemCountComponent'

function ItemComponent({prod}) {
    
    const onAdd = (cant) => {
        alert(`Se han agregado ${cant} productos al carrito`)
    }
    
    return (
        <div className='col-3 p-2'>
            <Card>
            <Card.Body>
                <Card.Img src={prod.thumbnail}></Card.Img>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text><ItemCountComponent prod={prod} onadd={onAdd} /> </Card.Text>
                <Card.Text>Disponible: {prod.sold_quantity} </Card.Text>
                <Card.Text>
                    Precio: {prod.price}
                </Card.Text>
                <Button variant="primary">Saber mas</Button>
            </Card.Body>
            </Card>
        </div>
    )
}


export default ItemComponent
