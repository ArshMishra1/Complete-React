import { useState } from "react"
import Data from "./Data.json"

const Question = () => {
    const [questionindex ,indexchanger]=useState(0);
     function nextquestion(){
        indexchanger(function(prev){
            if( )
            if(prev  <= Data.length -1){
                return prev +1
            }
            return 0
        })
     }
  return (
    <> <div className=" flex flex-col justify-center items-center gap-3">
        <h1 className=" text-2xl font-semibold tracking-wider">{Data[questionindex].question}</h1>
    <div className=" flex  flex-col gap-5">
     {
       Data[questionindex].options.map((ele ,index)=>{
               return <button key={index}  className=" bg-black font text-white rounded-3xl w-full h-auto min-h-[3.5rem] px-4 py-3 text-left block break-words whitespace-normal hover:bg-[Red] " onClick={()=>nextquestion(ele)}
               >{ele}</button>
})  
         }
         </div>
         </div>
    </>
  )
}

export default Question