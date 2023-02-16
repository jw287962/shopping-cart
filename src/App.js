import './css/App.css'
import React, {useState,useEffect} from "react";
import { useLocation } from 'react-router-dom';

const App = () =>{

  // let { state } = useLocation();
  // const [allProducts,setProducts]  = useState([]);

  // useEffect(()=>{
  //   console.log(state);
  //   if(allProducts !== state.allProducts){
  //     setProducts(state.allProducts);
  //   }
  // console.log(data)

  // })
  return (
    <div className='body'>
        <h1>HOME Page</h1>
      <div>BUY COOL THINGS ON THIS WEBSITE</div>
    </div>
    
  );
}

export default App;
