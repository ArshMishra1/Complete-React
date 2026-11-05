//useeffect--

import { useEffect, useState } from "react"

const App4 = () => {
    const [data ,setData] = useState([])
    console.log(data)

    useEffect(()=>{
       async function user(){
         let resoponse= await fetch("https://jsonplaceholder.typicode.com/users")

         let data= await resoponse.json()
          setData(data)
       }
       user()
    },[])
 

  return (
    <div>
      <h1>user Data</h1>
      {data.map((ele )=>{
        return <div key={ele.id}>
            <h1>{ele.name}</h1>
            <h1>{ele.username}</h1>
            <h1>{ele.email}</h1>
            <h1>{ele.website}</h1>
        </div>
        
        
      })}
    </div>
  )
}
export default App4