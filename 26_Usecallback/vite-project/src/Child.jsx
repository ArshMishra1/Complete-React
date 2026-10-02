import { memo, useEffect } from "react"

const Child = () => {
    useEffect(()=>{
        console.log("child componets")
    })
  return (
    <div>
  <h1>child
  </h1>
    </div>
  )
}

export default memo(Child)