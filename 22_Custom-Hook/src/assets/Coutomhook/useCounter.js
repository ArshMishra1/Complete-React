import React, { useState } from 'react'

export const useCounter = (initialstate) => {

  const  [values ,setvalue]= useState(initialstate)

  function increment(){
    setvalue(values+1)
  }
  function decrement(){
    setvalue(values-1)
  }

  function setvalues(value){
    setvalue(value)
  }
  return ({
    values,
    increment,
    decrement,
    setvalues,

  }
    
  )
}
