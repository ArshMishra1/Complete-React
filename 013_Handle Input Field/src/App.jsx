import React, { useState } from 'react'

const App = () => {
  const [formvalue, changevalue] = useState(" ")
  return (
    <div>
      <h1>Handle Input Field</h1>
      <input type="text" value={formvalue} placeholder='Enter full name ' className=' border-2' onChange={(e) => {
        changevalue(e.target.value)
      }} />
      <h1>{formvalue}</h1>
      <button onClick={() => {
        changevalue(" ")
      }}>Reset</button>
    </div>
  )
}

export default App
