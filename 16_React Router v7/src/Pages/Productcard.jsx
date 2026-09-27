import { useNavigate, useNavigation } from 'react-router-dom'
const Productcard = ({product}) => {
 const navigate=useNavigate()
  return (
    <>
    
      <div  className='border-1 rounded-4xl flex flex-col w-65 p-5 'onClick={()=>navigate(`/Product/${product.id}`)} key={product.id}>
                    <div >
                        < img src={product.image}alt="#" className='aspect-square object-fill ' />
                    </div>
                    <div >
                        <h1 className=' text-md font-semibold line-clamp-2'>{product.title}</h1>
                        <h2>{product.rating.rate} {product.rating.count}</h2>
                        <p>{product.price}.RS</p>
                        
                    </div>
                    </div>
    </>
  )
}

export default Productcard