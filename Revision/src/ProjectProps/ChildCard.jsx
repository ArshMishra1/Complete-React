const ChildCard = ({jobs}) => {
  const{companyName , address , interviewMode , numberOfOpenings , roleName ,photo}=jobs
  return (
    <>
      {/* <div className=" bg-gray-200  w-full sm:w-[280px]  lg:w-[300px] p-1.5 border-2 m-2 rounded-sm "> */}
      <div className="w-full sm:w-[280px] lg:w-[300px] p-2 bg-gray-200">

        <div className=' flex justify-center items-center'>
          <img src={photo} className="w-28 h-28 rounded-full"  />
        </div>
        <div className='bg-white  flex flex-col p-1 justify-center items-center mt-2'>
          <h2>{companyName} <span className="text-blue-500">{address}</span></h2>
          <h2>{roleName}</h2>
          <div className='flex mt-2 gap-5 '>
            <button className='p-1.5 w-20 border-2 rounded-sm bg-blue-500'>{numberOfOpenings}</button>
            <button className='p-1.5  w-20 border-2 rounded-sm'>{interviewMode}</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default ChildCard