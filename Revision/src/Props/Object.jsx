import React from 'react'

// const Object = (props) => {
//     console.log(props)
//   return (
//     <>
//     <h1>{props.obj.name}</h1>
//     <h2>{props.obj.lastname}</h2>
//     </>
//   )
// }

// export default Object

//1.destructure

// const Object = ({obj}) => {
//     console.log(obj)
//   return (
//     <>
//     <h1>{obj.name}</h1>
//     <h2>{obj.lastname}</h2>
//     </>
//   )
// }


// export default Object


//2.destructure

const Object = ({obj:{ name , lastname}}) => {
 
  return (
    <>
    <h1>{name}</h1>
    <h2>{lastname}</h2>
    </>
  )
}

export default Object

