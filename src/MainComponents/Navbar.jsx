import React,{useState} from 'react';
import { NavLink , Link} from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";

function Navbar() {

  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <nav className=' w-full h-[100px] flex bg-[#835C57] backdrop-blur-[14px]'>
      
      <ul className='w-[100%] items-center justify-evenly text-1.5rem font-thin xl:flex lg:flex md:flex sm:flex hidden text-white text-[1rem] uppercase font-serif'>

        <li className='cursor-pointer'>
          <NavLink to="/">Home</NavLink>
        </li>

        <li className='cursor-pointer '>
          <NavLink to="/about">About</NavLink>
        </li>

        <li className='cursor-pointer '>
          <Link to="/"><img src="../../logo-white.svg" alt="" /></Link>
        </li>

        <li className='cursor-pointer '>
          <NavLink to="/services">Services</NavLink>
        </li>

        <li className='cursor-pointer '>
          <NavLink to="/contact">contact</NavLink>
        </li>

      </ul>


      <div className='mr-5 w-[100%] flex items-center justify-between lg:hidden xl:hidden text-white px-5'>

        <img src="../../logo-white.svg" alt="" />
        <button onClick={()=> alert("Media Fleetblue")} >
          <TfiMenu className="w-[40px] h-[40px]"/>
        </button>

        {/* {
          true && ( 
            <ul className='my-10 bg-blue-200 w-[100%] h-[fit] items-center justify-evenly text-1.5rem font-thin xl:flex xl:flex-col lg:flex lg:flex-col md:flex sm:flex flex-col gap-6  text-white text-[1rem] uppercase font-serif'>

              <li className='cursor-pointer hover:border-b-2 border-white w-full '>
                <Link to="/overview">Overview</Link>
              </li>

              <li className='cursor-pointer hover:border-b-2 border-white w-full'>
                <Link to="/about">About</Link>
              </li>

              

              <li className='cursor-pointer hover:border-b-2 border-white'>
                Experiences
              </li>

              <li className='cursor-pointer hover:border-b-2 border-white'>
                Services
              </li>

            </ul>
          )
        } */}
      </div>

    </nav>
  )
}

export default Navbar;