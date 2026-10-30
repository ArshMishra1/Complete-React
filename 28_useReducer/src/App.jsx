import { useReducer } from "react";
import { useState } from "react";

function reducer(state , action){
    switch(action.type){
      case 'INCREMENT':
        return state +1;
        default :
        return state;
    }
}

function App() {
  const [count, setCount] = useState(0);
  const[value , dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <h1>Get started UseState</h1>
      </div>
      <button type="button" className="counter" onClick={() => setCount((count) => count + 1)} >Count is {count}  </button>

        <h1>Get started Usereducer</h1>
        <button onClick={()=> dispatch({ type :"INCREMENT"}) }>Value is {value}</button>


    </>
  );
}

export default App;
