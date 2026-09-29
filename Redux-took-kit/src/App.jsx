import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./Features/counterSlice"

const App = () => {

  const dispatch=useDispatch()
  const count=useSelector((state=>state.coutner.value))
  return (
    <div>
      <h1>0</h1>
      <button onClick={(
      )=>{

          dispatch(increment())
      }}>iNECREMENT</button>
      <button onClick={()=>{
        dispatch(decrement())


      }}> dECREMENT</button>
    </div>
  )
}

export default App