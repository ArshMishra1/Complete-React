import React from 'react'

// const Array = (props) => {
//     console.log(props)
//   return (
//     <>
//      <h1>{props.arr[0]}</h1>
//      <h1>{props.arr[1]}</h1>
//      <h1>{props.arr[2]}</h1>
//     </>
//   )
// }

// export default Array
const Array = ({arr}) => {
    console.log(arr)
  return (
    <>
     {arr.map((ele ,index)=>{
        return <p key={index}>{ele}</p>
     })}
    </>
  )
}

export default Array