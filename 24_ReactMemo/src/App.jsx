import { useEffect, useState } from "react"
import Child from "./Child"
import ImporveComponents from "./Child"

const App = () => {

  const[value , setvalue]=useState(0)
  useEffect(()=>{
    console.log("APP is rendser")
  },)
  return (
    <div>
     <Child value={value}/>
      <h1 >Count:{value}</h1>
      <button onClick={()=>{
        setvalue(value+1)
      }}>ADD</button>
      
    </div>
  )
}

export default App

