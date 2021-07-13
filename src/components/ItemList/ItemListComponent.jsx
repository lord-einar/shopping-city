import React, { useEffect } from 'react'
import ItemComponent from '../Item/ItemComponent'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function ItemListComponent() {

    const SHOP = useContext(ShopContext)

    const { category} = useParams()

    useEffect( () => {
        SHOP.setCategory(category)
    }, [SHOP, category])

    return (
        <div className='container'>
            <div className='d-inline-flex p-2 flex-wrap'>
                {SHOP.prod.map(p => {
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
