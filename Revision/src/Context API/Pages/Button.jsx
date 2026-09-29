import React, {useContext } from 'react'
import { CreateData } from '../Context/ThemeContext'

const Button = () => {
    const [theme ,settheme] = useContext(CreateData)
    function eventhandler(){
        if(theme =="black")  return settheme("red");
        settheme("black")
       
    }
  return (
    <>
     <button className='p-3 font-semibold rounded-2xl bg-black text-sm text-white'  onClick={eventhandler}>{theme}</button>

    </>
  )
}

export default Button