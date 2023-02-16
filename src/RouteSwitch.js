import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import  Shop  from './Shop';
import { Nav } from './Nav';
import Checkout from './Checkout';

const RouteSwitch = () =>{


  return (
    <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<App ></App>}></Route>
          <Route path='/shop' element={<Shop></Shop>} ></Route>
          <Route path='/shop/checkout' element={<Checkout></Checkout>}></Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default RouteSwitch;
