import React from 'react'

const ColorButton = ({ color, setcolor ,children }) => {
    function change(){
     setcolor(color)
    }

    return (
  <button style={{
            backgroundColor:color
        }} onClick={change} className=' w-25 p-5 h-4  flex justify-center items-center text-base rounded-3xl    '>{color}</button>
        
    )
}

export default ColorButton