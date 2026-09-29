import { useState } from "react";
import { createContext } from "react"

// create contex
 export const CreateData=createContext();


const ThemeContext = ({children}) => {
      const [theme , settheme]=useState('black')
  return (
    <div>
        <CreateData.Provider value={[theme ,settheme]}>
        {children}
        </CreateData.Provider>
    </div>
  )
}

export default ThemeContext