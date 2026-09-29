
import { useContext } from 'react'
import { CreateData } from '../Context/ThemeContext'
import Button from './Button'

const Nav2 = () => {
    const [theme] =useContext(CreateData)
   
  return (
    <div className=' flex justify-between items-center gap-4'>
        <h2>Home</h2>
        <h2>Porduct</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <Button/>
        
    </div>
  )
}

export default Nav2