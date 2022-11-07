import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Links from './components/links'
import Beef from './components/beef'

const Homepage = () => {
  return (
    <div className="App">
    <Header/>
    <Links />
    <Beef/>
    <Footer/>
    </div>
  )
}

export default Homepage