import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CategoriesComponent from '../categorias/CategoriasComponent'

function HomeComponent() {


    const [categories, setCategories] = useState([
        {
            name: 'Calzado',
            img: 'calzado.jpg'
        },
        {
            name: 'Herramientas',
            img: 'herramientas.jpg'
        },
        {
            name: 'Indumentaria',
            img: 'indumentaria.jpg'
        },
        {
            name: 'Informatica',
            img: 'informatica.jpg'
        },])

    useEffect( () => {

    })

    return (
        <>
            <div className='portada'>
                <img src="logo.svg" className="logo-portada" alt="logo" />
                <p className='titulo-portada'>
                    Shopping City
                </p>
                <div className='d-flex flex-wrap justify-content-center'>
                    {categories.map (category => {
                        return(
                            <CategoriesComponent 
                            categoria={category}
                            ></CategoriesComponent>
                            )
                        })}
                </div>
            </div>

        </>
    )
}

export default HomeComponent
