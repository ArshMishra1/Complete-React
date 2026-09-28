import { useState } from "react"

const Thirds = () => {
 

  const  [show , setshow]=useState(true)
  return(
    <div>
        <button  className="bg-black text-white rounded-3xl text-2xl p-5" onClick={()=>setshow(!show)}>
            { show ? "Hide" : "show"} Message

        </button>
        {show && <p >this is secret message</p>}
       
    </div>
  )
}

export default Thirds
