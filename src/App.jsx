import React,{ useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import ContactUs from './Components/ContactUs'
import AboutUs from './Components/AboutUs'
import { ThemeProvider } from './Components/Context/ThemeContext';

function App() {
  
  const [mode,setMode]=useState(false)

  return (
    <>
    <BrowserRouter>
    <ThemeProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='aboutus' element={<AboutUs/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
     
    </>
  )
}

export default App
