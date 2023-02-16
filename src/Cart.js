import './css/cart.css'
import React, {useState,useEffect} from 'react';

 const Cart = (props) => {

  const [cartItems, setCartItems] = useState(0);
  useEffect(()=> {
    if(cartItems != props.counter){
      setCartItems(props.counter);
    }
  })

  return (
      <div className="cart">
            <div>Cart:{cartItems}</div>
            <button>Checkout</button>
      </div>
  )
}
export default Cart;