
const Revision = () => {
    let  name="Arsh"
    let phone=9455030699;
    let arr=["Arsh" ,"Kumar" ,"mishra"]
    let obj={
        fav:"Rohit sharma",
        favIPL :"MI"
    }
    let userage=12;

    function demo(){
        console.log("Hello fnc is here")
    }
  return (
    <>
    <h1>userName:{name}</h1>
    <h2>Phone Number=:{phone}</h2>
   {arr.map((ele , index)=>{
    return  <h2 key={index}>{ele}</h2>
   })}
   <h2>Fav:{obj.fav}</h2>
   <h2>Fav:{obj.favIPL}</h2>
   <h2>{userage > 18 ? "You can drive " : "You can not Dervie"}</h2>
   <button onClick={demo}> click here</button>

    </>
  )
}

export default Revision