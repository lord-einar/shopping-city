import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function ItemCountComponent({prod}) {
    
    const [cantidad, setCantidad] = useState(1)

    function onAdd(){
        if(cantidad < prod.stock){
            setCantidad(Number(cantidad)+1)
        }
    }
    function onSubtract(){
        if(cantidad > 1) {
            setCantidad(Number(cantidad)-1)
        }
    }
    return (
        <div className='d-flex'>
            <Button onClick={onSubtract}>-1</Button>
                <Form.Control className='text-center' type="text" name="cantidad" value={cantidad} />
            <Button onClick={onAdd}>+1</Button>
        </div>
    )
}

export default ItemCountComponent
