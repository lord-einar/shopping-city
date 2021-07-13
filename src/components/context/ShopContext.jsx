import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext()

export function ShopComponentContext({children}) {

    const [category, setCategory] = useState([])
    const [cart, setCart] = useState([])

    
    const addToCart = async (newProd, cant) => {

        const productoAgregado = {...newProd, cantidad: cant}
        if(cart){
            cart.map(item => {
                if(item.id === productoAgregado.id){
                    item.cantidad = item.cantidad + productoAgregado.cantidad
                    return console.log(cart)
                }
            })
        }
        await setCart(cart => [...cart, productoAgregado])
    }
    
    const [prod, setProd] = useState([])
    useEffect( () => {

        const getProducts = async () => {

            if(category){
                await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${category}`)
                .then(resp => setProd(resp.data.results))
            }
        }

        getProducts()
    }, [category, cart])

    return (
        <ShopContext.Provider value={{prod, setProd, setCategory, cart, addToCart}}>
            {children}
        </ShopContext.Provider>
    )
}
