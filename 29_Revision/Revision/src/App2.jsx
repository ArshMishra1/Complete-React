//State ✅
//hook✅
//useStatehook ✅
//counter ✅
//array off object print
//Dark / Light Mode✅
//like and unlike ✅
//ARRAY✅

import { useState } from "react"






//!Counter

// import { useState } from "react"

// const App2 = () => {
//  let [value ,setvalue]=useState(0)

//  function increment(){
//     setvalue(value+1)
//  }

//  function Decrement(){
//     if(value >0){
//     setvalue(value-1)
//     }
//  }
//   return (
//     <div>
//         <h1> value :{value}</h1>
//         <button className="btn1" onClick={increment}>Increment</button>
//         <button className="btn2" onClick={Decrement}>Decrement</button>
//     </div>
//   )
// }

// export default App2

// //Dark / Light Mode
// import { useState } from "react"

// const App2 = () => {

//     let [currentColor , setColor]=useState("Red")
//       function color(){
//         if("Red" == currentColor){
//             setColor("black")
//         }else{
//             setColor("Red")
//         }
//       }
//   return (
//     <div style={{backgroundColor:currentColor}}>
//        <button onClick={color}> Mode {currentColor}</button>
//     </div>
//   )
// }

// export default App2

//!Like /unLike feature

// import { useState } from "react"

// const App2 = () => {
//   let [like, setlike] = useState(0)
//   let [changetext, setchangetext] = useState("Like")
//   let [hide, sethide] = useState(true) 

//   function sinlge() {
//     setlike(like + 1)
//     setchangetext("Linked")
//     sethide(false)
//   }

//   function Double() {
//     if (like > 0) {
//       setlike(like - 1)
//       setchangetext("Like")
//       sethide(true)
//     }
//   } 

//   return (
//     <div>
//       <h1> value : {like}</h1>
//       {hide ? (
//         <button className="btn1" onClick={sinlge}>
//           🩷 {changetext}
//         </button>
//       ) : (
//         <button className="btn2" onDoubleClick={Double}>
//           🩷 {changetext}
//         </button>
//       )}
//     </div>
//   )
// }

// export default App2




//ARRAY

const App2 = () => {

  const arr = [1, 2, 3, 4, 5]
 const [arrvalue , setarrvalue]=useState(arr)
 console.log(arrvalue)
 function add(){
    arrvalue.push(6)

 }
 

  return (
    <div>{
        arrvalue.map((ele ,index)=>{
            return <h1 key={index}>{ele}</h1>
        })
      
        }
        <button onClick={add}>add</button>
        </div>

  )
}

export default App2
