import  Cart  from "./Cart"
import Product from "./Product"
import React, {useState,useEffect} from "react";


function importAll(img){
  let object = [];
  let allImages = img.keys().map(img);

  img.keys().forEach((element,i) => {
    let imageName = element.substring(2,element.substring(2).indexOf('.')+2);
    imageName = imageName.substring(0,1).toUpperCase() + imageName.substring(1);
    let imageFile = allImages[i];
    object.push({imageName,imageFile});
    i++;
  });
  console.log(object);
  return object;
}


 const Shop = () => {
  const allPictures = importAll(require.context('./images',false,/\.(png|jpe?g|svg|gif)$/));
  const allProducts = [];

  for(let i =0;i <allPictures.length;i++){
  const item =  {name: allPictures[i].imageName, picture: allPictures[i].imageFile,count:0};
    allProducts.push(item);
  }

  console.log(allPictures);
  console.log(allProducts)
const [products,setProducts] = useState(allProducts);
const [itemCounter,setItemCounter] = useState(0);

    useEffect(() => {
    });


    const updateInput = (e) => {
      if(e.target.value < 0){
return
      }
        console.log(e.target.value);
      const arrayNum = e.target.parentElement.parentElement.getAttribute('a-key');
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
        <Cart counter={itemCounter} products={products}></Cart>
        <div className="allProducts">
  
               {products.map((element,i = 0) => { 
                i++;
                let num = i-1;
                if(element == undefined || products[num] == undefined) return null;
                return(
                <div key={`${element.name}i`} a-key={num} className="listing">
                    <div>
                      <Product item={element}></Product>
                      <label htmlFor="product" >                    </label>
                      <input role="input" type='number' value={products[num].count} id='product'  onChange={updateInput} max="10"></input>
                    </div>
                  <img src={allPictures[num].imageFile} className='itemImage'></img>
                </div>
                )
               })}
        </div>
              
        


    </div>
    
  )

}

export default Shop;
