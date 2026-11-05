//second example

import { Component, useEffect, useState } from "react"

const App5 =()=>{
const [Count ,setCount]=useState(0)
useEffect(()=>{
    console.log("compnents is mounted")

    return ()=>{
        console.log("comonents unmounted")
    }
},[])

useEffect(()=>{
          console.log("Componets is Updateed")
},[Count])

    return(
        <>
           
        <h1>{Count}</h1>
        <button onClick={()=>{
            setCount(Count+1)
        }
        }>➕</button>
        <button onClick={()=>{
            setCount(Count-1)
        }}>➖</button>
        </>
        
    )
}
export default App5
