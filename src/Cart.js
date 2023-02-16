import './css/cart.css'
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

 const Cart = (props) => {

  const [cartItems, setCartItems] = useState(0);
  const [allProducts,setAllProducts] = useState(undefined);

  useEffect(()=> {
    if(cartItems != props.counter){
      setCartItems(props.counter);
    }
    if(allProducts != props.products){
      setAllProducts(props.products)
    }

  })

  return (
      <div className="cart">
            <div >Cart:{cartItems}</div>
            <Link to={{pathname:"/shop/checkout" }} state={{ allProducts: allProducts}}><button >Checkout</button></Link>
      </div>
  )
}
export default Cart;