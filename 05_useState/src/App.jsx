import  { useState } from 'react'

const App = () => {
const [ count ,setcount]=useState(0)
function incrementNum(){
  setcount(count+1)
  console.log("increment value")
}
  return (
    <>
    <h1>Counter project for understanding useState bro</h1>
    <h3>vlaue:{count}</h3>
    <button onClick={incrementNum}>increment</button>
    <button onClick={()=>{
      if(count >0){
        setcount(count -1)
         console.log("counter")
      }
    
    }}>Decremnet</button>
    </>
  )
}

export default App


