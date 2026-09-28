import React, { useContext } from 'react'
import { CreateContextData } from '../Context/TheamContextAPI'

const Button = () => {
    const [theme ,settheme]=useContext(CreateContextData)

    let themechanger=()=>{
        if(theme=='Lime'){
    settheme('red')
return}
settheme('Lime')
    } 
  return (
    <div>
        <button onClick={themechanger} className='bg-lime-200 rounded-3xl p-5 border-2 cursor-pointer'>click her {theme}</button>

    </div>
  )
}

export default Button