import { useCallback, useEffect, useState } from "react"
import Child from "./Child"

const App = () => {
   const [value , setvalue]=useState(0)

  function users(){
    console.log("lets see components")
  }
 

  let memoizes=useCallback(()=>{
    return users()
  },[])

  return (
    <div>
      <h1>Usecallback</h1>
      <button onClick={()=>{
        setvalue(value+1)
      }}> click to chane{value}</button>
<Child memoizes={memoizes}/>
    </div>
  )
}

export default App
