import { useState } from "react"

const Parent = () => {
    const [state, stateSet] = useState(0)
    function ince() {
        stateSet(state+1)
    
    }
    function dce() {

        //?old way  --first way
        
        // if( state===0){
        //      stateSet(0)
        // }else{
        // stateSet(state-1)}
        //? old second way

        if( state >0){
           stateSet( state-1)
        }else{
         stateSet(0)
        } 

        //?modren way
        stateSet (state>0 ? state-1 : 0  )
       
    }
    function reset(){
        
        stateSet(0)
}

    

    return (
        <> <div className="flex flex-col justify-center items-center w-full h-screen bg-amber-300 ">
            <h1 className=" text-5xl font-bold">Counter In React</h1>
            <div className='flex justify-center items-center mt-10 gap-5'>

                <button onClick={ince} className='bg-black text-white font-semibold  p-5 rounded-md' >Increment</button>
                <h1 className='bg-blue-600 text-white font-semibold  p-5  rounded-md'>{state}</h1>
                <button onClick={dce} className='bg-black text-white font-semibold  p-5 '>Decrement </button>
              
               <button onClick={reset} className='bg-black text-white font-semibold  p-5 '>Reset</button>
            </div>
            </div>
        </>
    )
}

export default Parent