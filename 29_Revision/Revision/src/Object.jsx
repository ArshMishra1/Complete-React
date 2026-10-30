

const Object = (props) => {
    const {address ,fileName , phoneNumber}=props.userinfo
  return (
    <div>
        <h1>name:{address}</h1>
        <h1>address:{fileName}</h1>
        <h1>phoneNumber:{phoneNumber}</h1>
    </div>
  )
}

export default Object