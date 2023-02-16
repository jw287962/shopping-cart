import  Cart  from "./Cart"
import Product from "./Product"
import React, {useState,useEffect} from "react";



 const Shop = () => {
  const allProducts = [];

  for(let i =0;i <= 5;i++){
  const item =  {name: `car${i}`, count:0};
    allProducts.push(item);
  }

const [products,setProducts] = useState(allProducts);
const [itemCounter,setItemCounter] = useState(0);

    useEffect(() => {
    });


    const updateInput = (e) => {
      if(e.target.value < 0){
return
      }
        console.log(e.target.value);
      const arrayNum = e.target.parentElement.getAttribute('a-key');
      const objectHolder = products[arrayNum];
      objectHolder.count  = e.target.value;
      products.splice(arrayNum,1,objectHolder)
      setProducts(products)


    setItemCounter(products.reduce((prev,ele) => {
      return ele.count*1 + prev*1;
    },0)
    )
    }


  return (
    <div className="body">
       <h1>Shopping Cart</h1>
        <Cart counter={itemCounter}></Cart>

             {products.map( (element,i = 0) => {
              i++;
              let num = i-1;
              if(element == undefined || products[num] == undefined) return null;
              return(
              <div key={`${element.name}i`} a-key={num}>
                <label htmlFor="product" >  <Product item={element}></Product>   </label>
                <input role="input" type='number' value={products[num].count} id='product'  onChange={updateInput}></input>
              </div>
              )
             })}
              
        


    </div>
    
  )

}

export default Shop;
