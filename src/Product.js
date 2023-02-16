import React, {useState, useEffect} from "react";

const Product = (props) => {
    const [item,setItem] = useState({name: ''});
 
  useEffect(() => {
    if(props.item !== item){
      setItem(props.item);
    }
  });
    
  return (
    <div>
        <div role="item">{item.name}  ${item.price}</div>
    </div>
  )
}



export default Product;