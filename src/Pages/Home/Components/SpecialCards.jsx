import React,{ useEffect } from 'react';
import { FaReact } from "react-icons/fa6";
import AOS from 'aos'
import 'aos/dist/aos.css'

function SpecialCards() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <section className="w-auto bg-white flex flex-col lg:flex lg:flex-row xl:flex xl:flex-row md:flex md:flx-row justify-between gap-1 lg:gap-5 ">

            <div className="left_child flex flex-col lg:flex lg:flex-row xl:flex xl:flex-row md:flex md:flex-row items-center justify-center w-full lg:w-1/2 xl:w-1/2 md:w-1/2 p-1 lg:p-10 gap-5">


                <div className="overflow-hidden w-[50%] h-[100%] md:h-[80%] lg:h-[80%] xl:h-[80%] md:mt-[10%] lg:mt-[10%] xl:mt-[10%] mt-5 rounded-md cursor-pointer">
                    <img
                        className=" scale-150 hover:scale-100 transition-all duration-[5000ms]"
                        src="../../asset11.jpg" alt="" 
                    />
                </div>


                <div className="overflow-hidden w-[50%] h-[80%] rounded-md cursor-pointer">
                    <img
                        className=" scale-150 hover:scale-100 transition-all duration-[5000ms]"
                        src="../../asset10.jpg" alt=""
                    />
                </div>
                
            </div>

            <div className="right_child w-full h-auto lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-1/2 flex flex-col items-center lg:items-left justify-center cursor-pointer p-5 text-left ">

                <h2 className="text-[16px] uppercase font-serif font-semibold mb-1 flex items-center justify-center text-[#bda178] text-center">  Welcome to Your Perfect Getaway </h2>

                <h2 className="text-[30px] font-serif font-thin mb-5 flex items-center justify-center text-[#042134] text-center"> Luxury and Comfort at Its Best  </h2>
                
                <p className="w-full text-center text-[#575561] font-serif ">
                    Experience unparalleled hospitality with stunning views, modern amenities, and personalized services designed to make your stay unforgettable. Book your stay today.
                </p>

                <button className="font-serif mt-5 px-12 py-1 font-thin bg-[#835C57] text-white hover:bg-white hover:text-[#835C57] hover:border-[1px] border-[#835C57] duration-1000">Enquire now</button>
            </div>
        </section>
    )
}

export default SpecialCards;