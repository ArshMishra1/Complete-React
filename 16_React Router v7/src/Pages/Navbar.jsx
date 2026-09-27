import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className=' flex gap-10 text-2xl font-semibold bg-yellow-50 p-5'>
        
        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black"})}to={'/'}>Home</NavLink>

        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to={'/Product'}>Product</NavLink>

        <NavLink style={(isActive) => ({ color: isActive ? "red" : "black" })} to={'/Contact'}>Contact</NavLink>

        <NavLink style={(isActive) => ({ color: isActive ? "red" : "black" })} to={'/About'}>About</NavLink>

      </div>
    </>
  )
}

export default Navbar