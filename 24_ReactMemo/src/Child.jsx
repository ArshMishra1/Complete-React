import { memo, useEffect } from "react"

const Child = ({value}) => {
    useEffect(() => {
        console.log('Child rendered')
    }, )
  return (
    <div><h1>Child</h1>
    <h1>Chidl value {value}</h1>
    </div>
  )
}
const ImporveComponents =memo(Child)
export default ImporveComponents