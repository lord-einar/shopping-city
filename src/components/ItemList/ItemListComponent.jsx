import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemComponent from '../Item/ItemComponent'

function ItemListComponent() {
    
    const [prod, setProd] = useState([])

    useEffect( () => {
        axios.get('https://api.mercadolibre.com/sites/MLA/search?q=procesadores')
          .then(resp => setProd(resp.data.results))
    }, [])

    return (
        <div className='container'>
            <img src="logo.svg" className="App-logo" alt="logo" />
            <span> Shopping City </span>
            <p className='d-inline-flex p-2 flex-wrap'>
                {prod.map(p => {
                    return <ItemComponent
                            key={p.id}
                            prod={p}
                           />
                })}
            </p>
        </div>
    )
}

export default ItemListComponent
