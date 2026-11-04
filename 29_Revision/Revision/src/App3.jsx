
//How to send data from child to parent component in React? ✅

import { useState } from "react"
import Child from "./Child"
import Chidl2 from "./Chidl2"


const App3 = () => {
    let user=false
    const [data ,setdata]=useState("heloo")
    let userdata =function(data){
         return setdata(data)
         
    }
  return (
    <div>
        <h1>Child data :-- {data} </h1>
        
        { user ? <Child data={userdata}/> : <Chidl2/>}

    </div>
  )
}

export default App3
//Conditional Rendering ✅
//List Rendering ✅