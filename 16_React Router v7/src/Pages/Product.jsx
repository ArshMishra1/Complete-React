import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'
import Loader from './Loader'




const Product = () => {

 const [product , setproduct]=useState([])
 const [loader ,setloader]=useState(true)
 console.log(product)
const fetchdata = async()=>{
      const response = await axios .get('https://fakestoreapi.com/products');
       setproduct( response.data)
       setloader(false)
  }

  useEffect(()=>{
    fetchdata();
  },[])

  if(loader) return  <Loader/>
  return (
    <div className='flex flex-wrap justify-center items-center h-full gap-5 mt-2 '>
 
        {
            product.map((product)=>{
                return  (
                   <Productcard product={product}  key={product.id}/>
                
                )
            })
        }
      
    </div>
  )
}

export default Product