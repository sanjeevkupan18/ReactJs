import React from 'react'
import { useContext } from 'react';
import { useCart } from '../Context/Cart';
const Cart =()=>{
    // const cart = useContext(CartContext)    //Instead of this we can now import usecart () and use below
    const cart  = useCart() 
    
    const total = cart.Item.reduce((a,b)=> a+b.price,0)
    return (
        <div className="cart-item">
            <h1>Cart</h1>
            {cart && cart.Item.map((item)=>(
                <li>{item.name} - {item.price}</li>
            ))}

            <p>Total Bill - ${total}</p>
        </div>
    )
}

export default Cart;