import { useState } from "react"


const Formhandling = () => {
    const [name,setName]=useState(" ")
    const [Email, setEmail]=useState(" ")
    const [passwords,setpasswords]=useState("")

    function nameinput(e){
        e.preventDefault();
        console.log(name, Email ,passwords);

    }
  return (
    <div>
    
        <h1>Hello form handling </h1>
      <form  onSubmit={nameinput} action="#">

        <label htmlFor="Name">Name:-</label>
         <input className='border-2' type="text"  value={name} id="Name" onChange={(e)=>setName(e.target.value)}/>
         <br />
         <br />
        
         <label htmlFor='Email'>Email:-</label>
         <input type='email' className='border-2' value={Email} id="Email" onChange={(e)=>setEmail(e.target.value)}/>
         <br />
         <br />

         <label htmlFor='Password'>Password:-</label>
         <input type="password"  className='border-2' value={passwords} id="Password" onChange={(e)=>setpasswords(e.target.value)}/>
         <br/>
         <br />

        <button type="submit" className='bg-black text-white p-3 font-semibold rounded-3xl'>Submit</button>
         


      </form>
    </div>
  )
}

export default Formhandling
