

import userData from './UserData'
import User from "./User"
import Product from "./Product"
import Object from './Object'
import App2 from './App2'
import App3 from './App3'

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
const App = () => {
  // const userinfo={
  //    fileName: "user-01.jpg",
  //   phoneNumber: "202-555-0101",
  //   address: "101 Example Street, Sample City"
  // }
  return (
    <>
           {/* <Product userData={userData}/>
           <User Username={"arsh"} city={"nodia"}/>
           <Object userinfo={userinfo}/> */}
           {/* <App2/> */}
           <App3/>
    </>
  )
}

export default App

