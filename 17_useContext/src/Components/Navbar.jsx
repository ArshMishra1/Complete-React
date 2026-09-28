import React, { useContext } from 'react'
import Nav2 from './Nav2'
import  { CreateContextData } from '../Context/TheamContextAPI'

const Navbar = () => {
    let [theme ,settheme]=useContext(CreateContextData)
  return (
    <div  style={{backgroundColor:theme}}className=' flex gap-5 justify-around items-center p-5 '>
        <h1>Logo</h1>
        <Nav2/>
    </div>
  )
}

export default Navbar
