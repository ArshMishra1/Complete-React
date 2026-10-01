import { useState } from "react"
import { useCounter } from "./assets/Coutomhook/useCounter"


const App = () => {
 const [firstvalue , updatevalue]= useState('')
 console.log(firstvalue)
  const data=useCounter(0)
  return (
    <div>
      <h1>Count value : {data.values}</h1>
      <button onClick={data.increment}>Increment+</button>
      <button onClick={data.decrement}>Decrement -</button>
      <input type="number"  value={firstvalue} onChange={(e)=> updatevalue(e.target.value)}/>
      <button onClick={()=>data.setvalues(Number(firstvalue))}> set value</button>
    </div>
  )
}

export default App