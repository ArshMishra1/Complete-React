const CardComponents = ({jobs}) => {
  return (
  <div className="bg-amber-400 p-1.5 w-60 flex flex-col justify-center items-center gap-3 m-2"> 
   

         <img src={jobs.image} alt="#" className="bg-green-400 rounded-full h-20 w-21.5 p-1.5 " />
        <h1 className=" flex justify-center ">{ jobs.name}</h1>
        <p>{jobs.role} @ {jobs.company}</p>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea totam eligendi incidunt quia tempora aperiam reiciendis eveniet sequi dolo:ibus.</p>
        <button className="bg-blue-700 text-amber-50 p-2 text-sl mt-3 mb-3"> Contact me</button> 


    </div>
  )
}

export default CardComponents