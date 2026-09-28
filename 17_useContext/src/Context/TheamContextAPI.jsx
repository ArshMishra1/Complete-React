import React, { createContext, useState } from 'react'
import App from '../App'

export const CreateContextData=createContext()

const TheamContextAPI = (props) => {
    const [theme ,setheme]=useState("Lime")
  return (
    <div>
               <CreateContextData.Provider value={[theme ,setheme]}>
                  {props.children}
               </CreateContextData.Provider>
    </div>
  )
}

export default TheamContextAPI