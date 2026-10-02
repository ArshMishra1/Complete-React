import { useEffect, useState } from "react"
import Input from "./Input";


const App = () => {
const [count ,setcount]=useState(0);

    const [apper ,disapper]=useState(false)

//run when every time
useEffect(()=>{
    console.log("without dependency array")
  },)
//mouting phase
  // useEffect(()=>{
  //   console.log("run when components mouteding")
  // },[])
//updating phase
 useEffect(()=>{
    console.log("run when components updating")
  },[count])



 



  return (
    <div>
       <h1>Count value:{count} </h1>
       <button onClick={()=>{ setcount(count+1)  }}>Increment </button>
       <button onClick={()=>{setcount(count-1)}}>Decrement</button>
     
      { apper && <Input setcount={setcount}/>}
       <button  onClick={ ()=>disapper(!apper)}>Edit value</button>
       
    </div>
  )
}

export default App
