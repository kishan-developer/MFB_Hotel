import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'


function AnimText() {

    useEffect(() => {
      AOS.init({ duration:2000 })
    }, []);

  return (
    <div className="w-full bg-white">

      {/* with img card */}
      <div
        className="min-h-screen bg-cover bg-center xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-5 items-center justify-center font-serif py-10 "
        style={{ backgroundImage: "url('/../../../asset13.jpg')" }}  // Ensure the path to your image is correct
      >
       
       
        <div className="bg-white bg-opacity-20 hover:bg-opacity-5  backdrop-filter backdrop-blur-md shadow-lg rounded-lg p-6 max-w-sm hover:cursor-pointer" >

          <img className="rounded-md w-[100%] h-[30vh] " src="../../asset11.jpg" alt="" />

          <p className="text-white text-opacity-75 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quaerat sequi a quas numquam nobis fugiat corporis distinctio reiciendis at?
          </p>
          <button className="mt-4 bg-[#835C57]  text-white px-4 py-2 rounded-lg ">
            Contact Now
          </button>
        </div>

        <div className="bg-white bg-opacity-20 hover:bg-opacity-5  backdrop-filter backdrop-blur-md shadow-lg rounded-lg p-6 max-w-sm hover:cursor-pointer" >

          <img className="rounded-md w-[100%] h-[30vh]" src="../../room.jpg" alt="" />

          <p className="text-white text-opacity-75 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quaerat sequi a quas numquam nobis fugiat corporis distinctio reiciendis at?
          </p>
          <button className="mt-4 bg-[#835C57]  text-white px-4 py-2 rounded-lg ">
            Contact Now
          </button>
        </div>

        <div className="bg-white bg-opacity-20 hover:bg-opacity-5  backdrop-filter backdrop-blur-md shadow-lg rounded-lg p-6 max-w-sm hover:cursor-pointer" >

          <img className="rounded-md w-[100%] h-[30vh]" src="../../room1.jpg" alt="" />

          <p className="text-white text-opacity-75 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quaerat sequi a quas numquam nobis fugiat corporis distinctio reiciendis at?
          </p>
          <button className="mt-4 bg-[#835C57]  text-white px-4 py-2 rounded-lg ">
            Contact Now
          </button>
        </div>

        

        {/* <div className="bg-white bg-opacity-20 hover:bg-opacity-5  backdrop-filter backdrop-blur-md shadow-lg rounded-lg p-6 max-w-sm" >
          <h2 className="text-2xl font-bold text-white mb-4">Our Card Heading</h2>
          <p className="text-white text-opacity-75">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quaerat sequi a quas numquam nobis fugiat corporis distinctio reiciendis at?
          </p>
          <button className="mt-4 bg-white bg-opacity-30 text-white px-4 py-2 rounded-lg hover:bg-opacity-50">
            Learn More
          </button>
        </div> */}

        {/* <div className="bg-white bg-opacity-20 hover:bg-opacity-5  backdrop-filter backdrop-blur-md shadow-lg rounded-lg p-6 max-w-sm" >
          <h2 className="text-2xl font-bold text-white mb-4">Our Card Heading</h2>
          <p className="text-white text-opacity-75">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quaerat sequi a quas numquam nobis fugiat corporis distinctio reiciendis at?
          </p>
          <button className="mt-4 bg-white bg-opacity-30 text-white px-4 py-2 rounded-lg hover:bg-opacity-50">
            Learn More
          </button>
        </div> */}
      </div>


      {/* withoud img card */}
      {/* <div class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 max-w-sm">
          <h2 class="text-2xl font-bold text-white mb-4">Glassmorphism Card</h2>
          <p class="text-white text-opacity-75">
            This is a beautiful glass card using Tailwind CSS. The background is blurred, giving it a frosted glass effect.
          </p>
          <button class="mt-4 bg-white bg-opacity-30 text-white px-4 py-2 rounded-lg hover:bg-opacity-50">
            Learn More
          </button>
        </div>
      </div> */}



        {/* <h1>Welcome to React Animation </h1><br/><br/>
        <h1>Fade</h1>

        <div className="w-[400px] h-[80px] bg-red-600 my-[10px] mx-auto" data-aos="fade-up">Fade up</div>
          <div className="w-[400px] h-[80px] bg-red-600 my-[10px] mx-auto" data-aos="fade-down">Fade Down</div>
          <div className="w-[400px] h-[80px] bg-red-600 my-[10px] mx-auto" data-aos="fade-right">Fade Right</div>
          <div className="w-[400px] h-[80px] bg-red-600 my-[10px] mx-auto" data-aos="fade-left">fade left</div>


        <h2>Flip</h2>
          <div className="w-[400px] h-[80px] bg-red-600 my-[10px] mx-auto" data-aos="flip-right">flip right</div>


        <h2>Zoom Animation</h2>

          <div className="w-[400px] h-[80px] bg-red-600 my-[10px] mx-auto" data-aos="zoom-in">zoom in </div>
        <br/><br/> */}
    </div>
  )
}

export default AnimText;