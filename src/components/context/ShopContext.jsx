import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext()

export function ShopComponentContext({children}) {

    const [category, setCategory] = useState([])
    const [cart, setCart] = useState([])

    
    const addToCart = (newProd, cant) => {

        const subtotal = newProd.price * cant

        const productoAgregado = {...newProd, cantidad: cant, subtotal: subtotal}
        if(cart){
            cart.map(item => {
                if(item.id === productoAgregado.id){
                     item.cantidad = item.cantidad + productoAgregado.cantidad
                }
            })
        }
        setCart(cart => [...cart, productoAgregado])
    }

    const removeToCart = (id) => {

        let aux = cart.filter(obj => {
            return obj.id !== id;
          });
          setCart(aux);
      

    }
    
    const [prod, setProd] = useState([])
    useEffect( () => {

        const getProducts = async () => {

            if(category){
                await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${category}`)
                .then(resp => setProd(resp.data.results))
            }
        }
        console.log(cart)
        getProducts()
    }, [category, cart])

    return (
        <ShopContext.Provider value={{prod, setProd, setCategory, cart, addToCart, removeToCart}}>
            {children}
        </ShopContext.Provider>
    )
}
