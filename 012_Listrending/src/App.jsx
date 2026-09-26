import data from './Data.json'
const App = () => {
  // console.log(data)
  return (
    <div className=' w-full h-screen'>
      <div className='bg-red-500 h-60'>
        {
          data.map((phone, index) => {
            return (
              <>
              {/* images */}
                <div className=' bg-amber-300 '>
                  <img src={phone.image} alt="" />
                </div>
                {/* detail */}
                <div>
                  <h1> {phone.title}</h1>
                  <p>{phone.rating} || {phone.reviews}</p>
                  {
                    phone.details.map((arr) => {
                      return <li>{arr}</li>
                    })
                  }

                </div>

                {/* bank offer */}
                <div>
                  <h1> {phone.offers.bankOffer}</h1>
                  <h1> {phone.offers.exchangeOffer}</h1>
                </div> 
                {/* price */}
                <div> 
                   <p>{phone.originalPrice}</p>
                  <h1>{phone.price}</h1>
                  <p>{phone.discount}</p>
                </div>
              </>
            )
          })
        }



      </div>

    </div>
  )
}

export default App
