import React from 'react'
import LandingPage from './Component/LandingPage'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About.jsx'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {


  return (
    // <nav className=' bg-gray-800 p-4'>
    //  <div className='bg-gray-800 p-4 container mx-auto flex justify-between items-center '>
    //    <div className='text-white text-lg font-bold justify-center items-center  left-2/4 right-2/4'>
    //     <h1 className=" mx-auto  text-sky-300  font-bold  text-xl">SARFARAZ kHAN</h1>
    //    </div>
    //  </div>
    // </nav>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  )
}

export default App
