import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './Components/About.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Home from './Components/Home'
import Header from './Nav.jsx'
function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<ContactUs/>} />
      </Routes>
    </>
  )
}

export default App