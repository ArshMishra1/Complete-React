import React, { useState } from 'react'
import Logo from './componets/Logo'
import Features from './componets/Features'
import { FiAlignJustify } from "react-icons/fi";
import Hero from './componets/Hero';
import Heromain from './componets/Heromain';

const App = () => {
    const [screen , setscreen]=useState(false)
   
  return (
    <div className='h-screen w-full ' >
      <nav className=' flex justify-between  items-center bg-pink-400 text-white p-6 w-full'>
         <Logo/>
         <Features screen={screen} setscreen={setscreen}/>
         <FiAlignJustify onClick={()=>{setscreen(true)}} className='text-4xl block md:hidden '  />

      </nav>
      <Heromain/>

    </div>
  )
}

export default App
