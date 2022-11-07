import React from 'react'
import Falhofnercontent from './components/falhofner-content'
import HeaderFalhofner from './components/HeaderFalhofner'
import Footer from './components/Footer'

const Falhofner = () => {
  return (
    <div className="App">
        <HeaderFalhofner/>
        <Falhofnercontent/>
    </div>
  )
}

export default Falhofner