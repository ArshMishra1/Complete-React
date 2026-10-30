

const User = ({Username ,city}) => {

  return (
    <div>
          //! 1st way
      {/* <h1>name:{props.Username}</h1>
      <h2>city:{props.city}</h2> */}

      //! 2nd way
      <h1>name:{Username}</h1>
      <h1>city:{city}</h1>

    </div>
  )
}

export default User