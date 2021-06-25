import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemDetailComponent from '../ItemDetail/ItemDetailComponent'

function ItemDetailConteinerComponent() {

    const [prod, setProd] = useState({})


    useEffect( () => {
        axios.get('https://api.mercadolibre.com/items/MLA909372335?include_attributes=all')
          .then(resp => setProd(resp.data))
        axios.get('https://api.mercadolibre.com//items?ids=MLA909372335/description')
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
