import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import  Shop  from './Shop';
import { Nav } from './Nav';


const RouteSwitch = () =>{


  return (
    <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path='/' element={<App ></App>}></Route>
          <Route path='/shop' element={<Shop></Shop>} ></Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default RouteSwitch;
