import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailComponent from '../ItemDetail/ItemDetailComponent'

function ItemDetailConteinerComponent() {

    const [prod, setProd] = useState({})

    const { id } = useParams()


    useEffect( () => {
        axios.get(`https://api.mercadolibre.com/items/${id}?include_attributes=all`)
          .then(resp => setProd(resp.data))
        axios.get(`https://api.mercadolibre.com//items?ids=${id}/description`)
          .then(resp => setProd(preProd => {
              return {...preProd, desc: resp.data[0].body.plain_text}}))
        }, [])
    return (
        <div>
            <ItemDetailComponent prod={prod} />
        </div>
    )
}

export default ItemDetailConteinerComponent
