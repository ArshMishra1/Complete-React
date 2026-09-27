import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
   const nevigate=useNavigate()
   let userLogin=true;
   const nevigator =()=>{
    if(userLogin){
      nevigate("/Feature")
    }

   }

  return (
    <div>
        <Link to="/" > Home</Link>
        <Link to="/About" > About</Link>
        <Link to="/Feature" > Feature</Link>
        <Link to="/Contact"> Contact</Link>
        <button onClick={nevigator}> Nevigate to Feature</button>
    </div>
  )
}

export default Navbar
