import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Overview from './Pages/Overview/Overview'
import Navbar from './MainComponents/Navbar'
import  About  from './Pages/About'
import { Routes, Route} from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App() {
 

  return (
    <div className="w-full bg-white">
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <div className="whatsapp w-[75px] h-[75px] rounded-full  fixed bottom-20 right-10 ">
        <img className="w-[60px] h-[60px] cursor-pointer text-white" src="../../../pngwing.com.png" />
      </div>

      <div className="socialIcons w-[50px] py-5 rounded-r-md  fixed bottom-[40vh] left-0 flex flex-col items-center justify-center gap-5 bg-white bg-opacity-20 hover:bg-opacity-5  backdrop-filter backdrop-blur-md shadow-lg">

        {/* <img className="w-[40px] h-[40px]" src="../../facebook.png" alt="" />
        <img className="w-[40px] h-[40px]" src="../../insta.png" alt="" />
        <img className="w-[40px] h-[40px]" src="../../pinterst.png" alt="" />
        <img className="w-[40px] h-[40px]" src="../../twitter.png" alt="" /> */}
        <FaFacebook className="w-[30px] h-[30px] cursor-pointer text-[#835C57]"/>
        <FaInstagramSquare className="w-[30px] h-[30px] cursor-pointer text-[#835C57]"/>
        <FaPinterest className="w-[30px] h-[30px] cursor-pointer text-[#835C57]" />

        <FaSquareXTwitter className="w-[30px] h-[30px] cursor-pointer text-[#835C57]" />

      </div>

      <div className="bg-[#835C57] text-white font-serif w-full text-center py-7 cursor-pointer">
        <span className="flex items-center justify-center gap-2"> Copyright © 2024 | Made with <FaHeart className="w-5 h-5 text-red-500"/> by Media Fleetblue</span>
      </div>
    </div>
  )
}

export default App;
