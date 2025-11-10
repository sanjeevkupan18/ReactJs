import React,{useContext} from 'react';
import { useCart } from '../Context/Cart';

const Item =(props)=>{
    const cart = useCart(); // using usecart instead of that -> useContext(CartContext)

    console.log("Cart", cart)
    return (
        <div className="item-card">
            <h3>{props.name}</h3>
            <p>Price : ${props.price}</p>
            <button onClick={()=> cart.setItem([...cart.Item ,
                 {name:props.name,price:props.price}])}>Add to Cart</button>
        </div>
    )
}

export default Item;