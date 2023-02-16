import  Cart  from "./Cart"
import Product from "./Product"

const car = {name: 'car1'};
export const Shop = () => {
  return (
    <div className="body">
       <h1>Shopping Cart</h1>
       <Cart></Cart>
        <Product item={"car"}></Product>


    </div>
    
  )

}
