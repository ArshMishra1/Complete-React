import { use, useState } from "react";
import ColorBox from "./ColorBox"
import ColorButton from "./ColorButton"

const Parent = () => {
    let colors = ["Red", "Blue", "Green", "Yellow", "pink"];

    const[ color , setcolor]=useState("yellow")
 

  return (
  <div className=" w-full bg-green-400 h-screen flex gap-5  flex-col justify-center items-center">
    <h1 className=" text-4xl font-semibold tracking-wider ">Color Switcher</h1>

     {
        colors.map((ele, index)=>{
            return <ColorButton key={index}  color={ ele } setcolor={setcolor}>{ele} </ColorButton>
        })
       }


    <ColorBox color={color} />
</div>
  )
}

export default Parent