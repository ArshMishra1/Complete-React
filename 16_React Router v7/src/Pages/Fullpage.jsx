import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader';
import axios from 'axios';

const Fullpage = () => {
  let { id } = useParams();
  // 1. Change initial state to null or an empty object instead of an array
  const [product, setproduct] = useState(null)
  const [loader, setloader] = useState(true)
const nevigate=useNavigate()
  const fetchdata = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setproduct(response.data)
      setloader(false)
    } catch (error) {
      console.error("Error fetching product data:", error);
      setloader(false);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [id]) //  Add id to the dependency array so it refetches if the URL changes

  if (loader) return <Loader />
  
  // 3. Prevent rendering errors if product failed to load
  if (!product) return <div className='text-center mt-5'>Product not found</div>

  return (
    <div className='flex  relativeflex-wrap justify-center items-center h-full gap-5 mt-4 '> 
    <button className='bg-blue-400 text-sm text-white font-semibold rounded-2xl py-2 px-4 absolute top-4 right-0' onClick={()=> nevigate(`/Product`)}> back to Product page</button>
     
      <div className='border-1 rounded-4xl flex flex-col w-250 justify-center items-center p-5 ' key={product.id}>
        <div>
          <img src={product.image} alt={product.title} className='aspect-square  object-center' />
        </div>
        <div className='mt-4'>
          <h1 className=' text-md font-semibold '>{product.title}</h1>
          
          <h2 className='mt-4 text-sm'>{product.description}</h2>
          <h2 className='font-medium mt-4'> <span className='bg-blue-400 text-sm text-white font-semibold rounded-2xl py-2 px-4'>⭐{product.rating?.rate} </span>{product.rating?.count}</h2>
          <p className='  mt-4 text-2xl text-white font-semibold'>{product.price}.RS</p>
        </div>
      </div>
    </div>
  )
}

export default Fullpage
