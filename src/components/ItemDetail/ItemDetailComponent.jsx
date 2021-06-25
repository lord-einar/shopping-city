import React from 'react'
import './ItemDetail.css'
import { Card, Button, Row, Col } from 'react-bootstrap'
import ItemCountComponent from '../ItemCount/ItemCountComponent'

function ItemDetailComponent({prod}) {

    const onAdd = (cant) => {
        alert(`Se han agregado ${cant} productos al carrito`)
    }
    return (
        <div className='row details'>
            <Card className='col-auto card-detail'>
            <h1>Detalles del producto</h1>
                <Row>
                    <Col>
                        <Card.Img className='col-4' src={prod.thumbnail}></Card.Img>
                    </Col>
                    <Col>
                        <Card.Body className='col-5'>
                            <Card.Title>{prod.title}</Card.Title>
                                Precio: {prod.price}
                            <Card.Text>Disponible: {prod.sold_quantity} </Card.Text>
                            <Card.Text><ItemCountComponent onadd={onAdd} prod={prod} /> </Card.Text>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='parrafo-descripcion'>
                            {prod.desc}
                        </p>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ItemDetailComponent
