import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment ,setvaluecoutner } from "./redux/counterSlice";
import Navbar from "../Navbar";
import Product from "./Product";

const App = () => {
  const [value , setvalue]=useState("")
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.count);
  const handler=(e)=>{
      
          setvalue(e.target.value)
      
  
  }

  
  return (
    <>
    <Navbar/>
    <Product/>
    <div className=" flex  justify-center items-center bg-lime-300 flex-col h-screen gap-3">
      <h1 className=" text-5xl font-bold">Redux Tool Kit </h1>
      <h1 className="text-3xl text-black font-semibold">Counter</h1>
    <h2>Set counter initial value</h2>
    <input type="text"  value={value} placeholder="Enter Inital value"  onChange={handler}/>
    <button  className=" p-4 bg-orange-400 text-2xl text-white font-semibold rounded-3xl" onClick={()=>{
       if (value === "" || isNaN(Number(value))) { 
      alert("Please enter a number");
      return;
    }
      dispatch(setvaluecoutner(Number(value)))}}>Set value</button>
      <h2 className="text-4xl  bg-red-400 py-2 rounded-3xl px-5 text-white border-2 border-black font-semibold">{data}</h2>
      <div className=" flex gap-5">
      <button className=" p-4 bg-black text-2xl text-white font-semibold rounded-3xl"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button >
      <button   className=" p-4 bg-black text-2xl text-white font-semibold rounded-3xl"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Dcrement
      </button>
      </div>
      </div>
    </>
  );
};

export default App;
