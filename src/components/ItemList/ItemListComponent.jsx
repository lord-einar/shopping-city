import React from 'react'
import ItemComponent from '../Item/ItemComponent'

function ItemListComponent() {
    const productos = [
        {
            id: 1,
            articulo: 'Intel Core I5 10400F',
            precio: 28900,
            stock: 15,
            img: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i5-10400f-0.jpg'
        },
        {
            id: 2,
            articulo: 'Intel Core I7 10700F',
            precio: 35000,
            stock: 12,
            img: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-10700f-0.jpg'
        },
        {
            id: 3,
            articulo: 'AMD Ryzen 5 5600K',
            precio: 42300,
            stock: 11,
            img: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-amd-ryzen-5-5600x-0.jpg'
        },
        {
            id: 4,
            articulo: 'AMD Ryzen 7 5800K',
            precio: 62000,
            stock: 10,
            img: 'https://www.techinn.com/f/13795/137954422/amd-procesador-ryzen-7-5800x-3.8ghz.jpg'
        }
    ]


    return (
        <div className='container'>
            <img src="logo.svg" className="App-logo" alt="logo" />
            <a className="App-link" rel="noopener noreferrer"> Shopping City </a>
            <p className='d-flex'>
                {productos.map(prod => {
                    return <ItemComponent 
                            key={prod.id}
                            prod={prod}
                           />
                })}
            </p>
        </div>
    )
}

export default ItemListComponent