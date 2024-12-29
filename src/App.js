import React from 'react'
import Navbar from './Navbar'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myaccount from './Pages/Myaccount';
import Aboutus from './Pages/Aboutus';
import Ourstory from './Pages/Ourstory';
import Sellon1mdm from './Pages/Sellon1mdm';
import Pricing from './Pages/Pricing';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path='/Myaccount' element={<Myaccount/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Ourstory' element={<Ourstory/>}/>
      <Route path='/' element={<Sellon1mdm/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
    </Routes> 
    </BrowserRouter>
    </>
  )
}
