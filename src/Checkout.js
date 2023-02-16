
import React, {useState,useEffect} from "react";
import'./css/checkout.css'
import { useParams,useLocation} from "react-router-dom";

const Checkout = (props) => {
  // const location = useLocation();
  // const { data } = location.state;
  let { state } = useLocation();
  const [allProducts,setProducts]  = useState([]);

  useEffect(()=>{
    console.log('use effect Checkout')
    if( allProducts !== state.allProducts){
      setProducts(state.allProducts);
    }
  // console.log(data)

  })

  const subtractItem = (e) => {
    console.log(e.target.textContent)
    const arrayNum = e.target.id
    const objectHolder = allProducts[arrayNum];
    e.target.textContent === '-' ? objectHolder.count  = allProducts[arrayNum].count*1-1 : objectHolder.count  = allProducts[arrayNum].count*1+1;
    allProducts.splice(arrayNum,1,objectHolder);
    setProducts(allProducts.concat([]));
  }


  return (
    <div className="body"> <h2>CHECKOUT</h2>
        {allProducts.map( (ele,i)=> {
          i++;
          let num = i-1;
          if(ele == undefined) return (   <div> TOTAL : {  allProducts.reduce((prev,curr) => prev + (curr.price*curr.count),0)} </div>)
          if(ele.count == 0) return;
          return(
            <div className="cartCheckout" key={ele.name}> 
                <h3>{ele.name}</h3> <div className="checkoutCount"><button onClick={subtractItem} id={num}>-</button>  {ele.count} <button onClick={subtractItem} id={num}>+</button></div><div> ${ele.price}</div> 
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