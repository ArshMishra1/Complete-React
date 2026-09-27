
import { BrowserRouter as Router ,Routes ,Route, Outlet } from "react-router-dom"
import Navbar from "./Pages/Navbar"

const App = () => {
  return (

      <> 
      <div className=" bg-white w-full h-full ">
      <Navbar/>
      <Outlet/>
      </div>
      </>
  )
}

export default App