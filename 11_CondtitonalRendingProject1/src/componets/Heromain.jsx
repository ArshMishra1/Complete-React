import React from 'react'
import { useState } from 'react'
import Hero from './Hero'

const Heromain = () => {
    const [show, setshow] = useState(false)
    const [edit, setedit] = useState(false)

    return (
        <>
            <div className='  flex justify-center items-center h-[100vh] bg-amber-400 gap-10 relative'>
                <button className='bg-black h-15 rounded-3xl p-2 text-2xl text-white cursor-pointer ' onClick={() => {
                    setshow(true)
                }}> Delete</button>
                <Hero show={show} setshow={setshow} title={"Delete"} />
                <button className='bg-black h-15 rounded-3xl p-2 text-2xl text-white cursor-pointer ' onClick={() => {
                    setedit(true)
                }}> Edit</button>
                <Hero show={edit} setshow={setedit} title={"edit"} />
            </div>

        </>
    )
}
export default Heromain
