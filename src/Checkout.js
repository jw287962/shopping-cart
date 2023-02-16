
import React, {useState,useEffect} from "react";
import'./css/checkout.css'
import { useParams,useLocation} from "react-router-dom";

const Checkout = (props) => {
  // const location = useLocation();
  // const { data } = location.state;
  let { state } = useLocation();
  const [allProducts,setProducts]  = useState([]);

  useEffect(()=>{
    if(allProducts !== state.allProducts){
      setProducts(state.allProducts);
    }
  // console.log(data)

  })
  return (
    <div className="body"> <h2>CHECKOUT</h2>
        {allProducts.map( ele=> {
          if(ele == undefined) return (   <div> TOTAL : {  allProducts.reduce((prev,curr) => prev + (curr.price*curr.count),0)} </div>)
          if(ele.count == 0) return;
          return(
            <div className="cartCheckout" key={ele.name}> 
                <h3>{ele.name}</h3> <div className="checkoutCount"><button>-</button>  {ele.count} <button>+</button></div><div> ${ele.price}</div> 
                <img src={ele.picture} className="checkoutImg"></img>
                <div className="itemTotals"> Item Total: ${(ele.count * ele.price).toLocaleString() } </div>
            </div>
          )
        })
        }
          <h2> TOTAL : ${  allProducts.reduce((prev,curr) => prev + (curr.price*curr.count),0).toLocaleString()} </h2>
          <button className="pay">PAY</button>
    </div>
  )
}

export default Checkout;