
import LogicalaAND from '../Logical AND opertor/LogicalaAND'
import First from '../ternary/First';

const Test = () => {
  let userData=1;
  if(userData===0){

    return (
      <div>
        <First/>
        
      </div>
    )
  }else{
     return (
      <div>
        <LogicalaAND/>
      </div>
     )
  }
  
}

export default Test