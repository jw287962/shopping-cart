
import React, {useState,useEffect} from "react";
import'./css/checkout.css'
import { useParams,useLocation} from "react-router-dom";

const Checkout = (props) => {
  // const location = useLocation();
  // const { data } = location.state;
  let { state } = useLocation();
  const [allProducts,setProducts]  = useState([]);

  useEffect(()=>{
    console.log(state);
    if(allProducts !== state.allProducts){
      setProducts(state.allProducts);
    }
  // console.log(data)

  })
  return (
    <div className="body">
        {allProducts.map( ele=> {
          console.log(ele);
          if(ele == undefined) return (   <div> TOTAL : {  allProducts.reduce((prev,curr) => prev + (curr.price*curr.count),0)} </div>)
          if(ele.count == 0) return;
          return(
            <div className="cartCheckout" key={ele.name}> 
                <h3>{ele.name}</h3> <div>{ele.count}x</div><div> Price:${ele.count * ele.price}</div> 
            </div>
          )
        })
        }
        <h2> TOTAL : ${  allProducts.reduce((prev,curr) => prev + (curr.price*curr.count),0)} </h2>
        <button>PAY</button>
    </div>
  )
}

export default Checkout;