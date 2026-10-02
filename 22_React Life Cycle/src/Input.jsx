import React, { useEffect } from 'react'
import { useState } from 'react'

const Input = ({setcount}) => {
    const [name,setname]=useState('')

//unmouting...
      useEffect(()=>{
    console.log("Mouting .....")
    return ()=>{
      setcount(0)
      console.log('unmouting.....')
    }
  },[])
    
    
  return (
    <div>
      <input type="number" value={name} placeholder="ENTER nuMBER" onChange={(e)=>{
       setname(e.target.value)
       }} />
        <button onClick={(e)=>{ e.preventDefault()
        {setcount(Number(name ))}
       }}> setvalue</button>
    </div>
  )
}

export default Input
