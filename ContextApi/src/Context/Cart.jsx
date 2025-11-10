import { useState,useContext } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const useCart = ()=>{
    const cart = useContext(CartContext)
    return cart
}

export const CartProvider = (props)=>{
    const [Item , setItem] = useState([]);

    return <CartContext.Provider value={{Item,setItem}}>
        {props.children}
    </CartContext.Provider>
}