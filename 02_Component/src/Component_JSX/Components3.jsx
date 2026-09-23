const Components3 = () => {
    let userName = "Arsh "
    let LastName = "Mishra"
    let address = {
        city: "Sultanpur",
        pincode: 228121
    }
    const hobbies =
        ["coding", "cricket", "gaming"]

    return (
        <>
         <h1>UserInformation</h1>
         <h2>FirstName :{userName}</h2>
         <h2>LastName :{LastName}</h2>
         <h3>address :{address.city} , pindcode :{address.pincode}</h3>
         <h3>hobbies :{hobbies.map((ele)=>{
            console.log(ele)
            return ele
         })}</h3>
            
        </>
    )
}
export default Components3