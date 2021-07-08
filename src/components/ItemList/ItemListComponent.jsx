import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemComponent from '../Item/ItemComponent'
import { useParams } from 'react-router-dom'

function ItemListComponent() {
    
    const [prod, setProd] = useState([])

    const { category} = useParams()

    useEffect( () => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${category}`)
          .then(resp => setProd(resp.data.results))
    }, [category])

    return (
        <div className='container'>
            <div className='d-inline-flex p-2 flex-wrap'>
                {prod.map(p => {
                    return <ItemComponent
                        key={p.id}
                        prod={p}
                           />
                })}
            </div>
        </div>
    )
}

export default ItemListComponent
