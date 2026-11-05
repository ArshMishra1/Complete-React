

import userData from './UserData'
import User from "./User"
import Product from "./Product"
import Object from './Object'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'

// const App=()=>{
//   return(
//      <div>
//        {
//       userData.map((ele ,index)=>{
//         return (
//           <div key={index}>
//           <h1>{ ele.fileName}</h1>
//           <h2>{ele.phoneNumber}</h2>
//           <p>{ele.address}</p>

//           </div>
//         )
//       })

//        }
//      </div>
//   )
// }
// export default App
import { useState } from "react"
const App = () => {
  // const userinfo={
  //    fileName: "user-01.jpg",
  //   phoneNumber: "202-555-0101",
  //   address: "101 Example Street, Sample City"
  // }
  const [mounte ,unmounted]=useState(true)
  
  return (
    <>
           {/* <Product userData={userData}/>
           <User Username={"arsh"} city={"nodia"}/>
           <Object userinfo={userinfo}/> */}
           {/* <App2/> */}
           {/* <App3/> */}
           {/* <App4/> */}
          
           <button onClick={ ()=>{
                 unmounted(!mounte)
           }}> toggle button</button>
           { mounte ?  <App5/> :"Remove"}
           
    </>
  )
}

export default App

