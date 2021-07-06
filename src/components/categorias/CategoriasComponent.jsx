import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CategoriasComponent({ categoria }) {
    return (
        <div className='m-3'>
            <Card style={{ width: '18rem' }}>
                <img className='img-categorias' src={`./img/${categoria.img}`} alt="" />
            <Card.Body>
                <Card.Title>{ categoria.name }</Card.Title>

                <Link to={`/categorias/${categoria.name}`}><Button variant="primary">Explorar</Button></Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default CategoriasComponent
