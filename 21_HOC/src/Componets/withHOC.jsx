const withHOC = (WrappedComponents) => {
  return (props)=>{
      console.log(`second `, props)

      return   <div className="bg-lime-300 text-white text-4xl border-2 p-4 border-black m-5">
       <h1>nested components</h1>
       <WrappedComponents data={props}/>
      </div>
  }
}

export default withHOC