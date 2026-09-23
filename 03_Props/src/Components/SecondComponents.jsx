

const SecondComponents = ({user ,lastname , address ,  hobbies}) => {
    

  return (
    <>
      <h1>{user}</h1>
      <h2>{lastname}</h2>
      <h3>{address.city}</h3>
      <h3>{address.pincode}</h3>
       {hobbies.map((hobbies, index) => (
        <h4 key={index}>{hobbies}</h4>
      ))}

    {/* <h1>userName:{props.userName} </h1>
    <p>age :{props.age}</p>
    <h3>address :{props.address.city} </h3>
    <h1>pincode :{props.address.pincode }</h1>
    <h1>hobbies :{props.hobbies.map((elm, index) => (
  <h2 key={index}>{elm}</h2>
))}</h1> */}
    </>
  )
}

export default SecondComponents