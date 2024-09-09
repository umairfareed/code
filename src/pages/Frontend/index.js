import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import About from './About'


export default function Frontend() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        
    </Routes>
    <Footer />
    </>
  )
}
