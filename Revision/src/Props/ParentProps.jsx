import Array from "./Array";
import ChildProps from "./ChildProps";
import Object from "./Object";
import Functionji from "./Functionji";

const ParentProps = () => {
    let userName="Rohit sharma"
    let userAge=39;
    let userAddress="Mumbai, India";

    let arr=["arsh" ,"kumar" ,"Mishra"]

    let obj={
        name:"Arsh",
        lastname:"Mishra"
    }
     function fun(){
        console.log("hello i am function")
     }
  return (
    <>
    <h1> Variable and number</h1>
       <ChildProps name={userName} age={userAge} Address={userAddress}/>
       <h1> Array </h1>   
       <Array arr={arr}/>
       <h2>Object</h2>
       <Object obj={obj}/>
       <h1> function</h1>
       <Functionji fun={fun}/></>
  )
}

export default ParentProps