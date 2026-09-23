import SecondComponents from './SecondComponents'

const FirstComponents = () => {
    const user = "Arsh"
    const lastuserNamae = "Mishra"
    const address = {
        city: "Sultanpur",
        pincode: 228121
    }
    const hobbies = ["coding ", "Cricket", "readingBooks"]
    return (
        <>
            {/* //first way */}

            {/* <SecondComponents user={user}  lastname={lastuserNamae} address={address} hobbies={hobbies} /> */}

            {/* //second way */}

            {/* <SecondComponents userName="Arsh" age={21} address={  { city :"Suntanpur", pincode :32324 }} /> */}

            {/* third way */}

<SecondComponents user={user}  lastname={lastuserNamae} address={address} hobbies={hobbies} />
            

        </>
    )
}

export default FirstComponents


