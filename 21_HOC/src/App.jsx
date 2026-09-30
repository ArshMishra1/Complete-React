import React from 'react'
import withHOC from './Componets/withHOC'
import FirstCom from './Componets/FirstCom'
import SecondCom from './Componets/SecondCom'
import Third from './Componets/Third'

const App = () => {
  const WithHOCComponets=withHOC(FirstCom)
  const WithHOCComponets2=withHOC(SecondCom)
  const WithHOCComponets3=withHOC(Third)
  return (
    <div>
      <WithHOCComponets/>
      <WithHOCComponets2/>
      <WithHOCComponets3 name="arsh"/>
     
    </div>
  )
}

export default App