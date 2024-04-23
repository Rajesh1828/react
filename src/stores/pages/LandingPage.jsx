

import React from 'react' 
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <img src="/banner.jpeg" alt="Banner" />
        <Products />
    </div>
  )
}

export default LandingPage