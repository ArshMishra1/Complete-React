
const Product = (props ) => {
  const{userData}= props
  return (
    <>
      {
        userData.map((elm ,index) => {
          return (
            <div key={index}>
              <h1>{elm.fileName}</h1>
              <h2>{elm.phoneNumber}</h2>          
              <p>{elm.address}</p>

            </div>
          )
        })

      }

    </>
  )
}

export default Product