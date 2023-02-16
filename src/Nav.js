import { Link } from "react-router-dom"
import './css/nav.css'
import {useLocation} from "react-router-dom";
import React, {useState,useEffect} from "react"

export const Nav = () => {
  let { state } = useLocation();
    const [allProducts,setAllProducts] = useState([]);

    useEffect(()=>{
      if( state && allProducts !== state.allProducts ){
        setAllProducts(state.allProducts);
      }
    // console.log(data)
  
    })

  return (
    <nav>
        <div>WebsiteName</div>
      <div>
        <Link to="/"  state={{ allProducts: allProducts}}>Home</Link>
        <Link to="./Shop"  state={{ allProducts: allProducts}}>Shop</Link>

        <Link to="/shop/Checkout"  state={{ allProducts: allProducts}}>Checkout</Link>

      </div>

    </nav>
  )
}