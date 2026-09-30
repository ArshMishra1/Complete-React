import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchproduct} from "./redux/Product"

const Product = () => {
   const  dispatch= useDispatch()
   
 const { products, loading, error}=useSelector( state=>state.products)
   console.log(products)

    
    useEffect(()=>{
        dispatch(fetchproduct())
    },[])
  return (
    <>
    <h1>Product</h1>
{/*     
     {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>  ) */}
        {products.map((products)=>{
            return  <div key={products.id}>
          <h3>{products.title}</h3>
          <p>${products.price}</p>
        </div> 
        })}
  </>
  )
}

export default Product