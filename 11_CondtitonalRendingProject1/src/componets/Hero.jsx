
const Hero = ({setshow ,show, title } ) => {
    

  return (
   <>
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500  ">
   { show && <div className=' flex   relative flex  flex-col gap-5 justify-center w-120 items-center bg-black text-white h-40'> 
    <button className=' absolute top-0 right-0  p-3 r  ' onClick={()=>{
        setshow(false)
    }}>❌</button>

        <h1> ✋Are you sure want {title} this?</h1>
       <div className=' flex  gap-1'>
        <button className='bg-pink-400 p-3 rounded-2xl'>Yes</button>
        <button className='bg-red-600 p-3 rounded-2xl'>NO</button>
       </div>
      
    </div>} 
    </div></>
  )
}

export default Hero
