import './css/cart.css'
import React, {useState,useEffect} from 'react';

 const Cart = () => {

  const [cartItem, setCartItem] = useState(0);

  return (
      <div className="cart">
            <div>Cart:{cartItem}</div>
            <button>Checkout</button>
      </div>
  )
}
export default Cart;