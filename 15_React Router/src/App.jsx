import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Feature from './Components/Feature'
import Contact from './Components/Contact'
import Nested2 from './Components/Nested2'
import Nested1 from './Components/Nested1'

const App = () => {
  const user=false;
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}> 
           <Route path="Nested1" to={<Nested1/>}>nested1</Route>
           <Route path="Nested2" to={<Nested2/>}>nested2</Route>
        </Route>

        <Route path="/Feature" element={<Feature/>}/>
        <Route path="/Contact" element={ user ? <Contact/> : <Navigate to="/Home" />}/>
      </Routes>
    </>
  )
}

export default App
