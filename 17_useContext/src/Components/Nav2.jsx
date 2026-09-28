import { createContext, useContext } from "react"
import { CreateContextData } from "../Context/TheamContextAPI"

const Nav2 = () => {
   const [theme ,settheme]=useContext(CreateContextData)
  return (
    <div className=" flex gap-2 justify-between items-center">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Contact</h2>
        <h2>Product</h2>
       <h2>{theme}</h2>
       
    </div>
  )
}

export default Nav2