import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'

const RouteSwitch = () =>{


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App ></App>}></Route>
          <Route ></Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default RouteSwitch;
