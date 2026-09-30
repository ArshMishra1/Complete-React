import React from 'react'

const Third = ( data) => {
    console.log(data)
  return (
    <div>

    <h1>Third componet </h1>
    <h2 className='text-black'>Name:{data.data.name}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius numquam velit ab placeat ullam, omnis totam, dolorem, odit ad alias tempore adipisci eum assumenda ea incidunt fugit sit nostrum delectus?</p>
    </div>
  )
}

export default Third