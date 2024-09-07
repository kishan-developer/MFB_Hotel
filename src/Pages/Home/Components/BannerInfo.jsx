import React from 'react';
// import { MdAccessTime } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

function BannerInfo() {

    return (
        <div className="w-full flex flex-col bg-white lg:flex lg:flex-row xl:flex xl:flex-row md:flex md:flex-row py-3 px-5 gap-3 uppercase text-[0.8rem] font-serif">

            <div className="w-[100%] lg:w-[33%] xl:w-[33%] md:w-[33%] flex flex-row gap-3 items-center justify-center h-[6rem] px-2 font-semibold cursor-pointer bg-[#835C57]  rounded-sm">
                <MdAccessTime className="text-[35px] text-white" />
                <div>
                    <h2 className="  text-white font-bold">Opening Timing</h2>
                    <p className=" text-gray-700 ">24/7 Always Open</p>
                </div>
            </div>

            <div className="w-[100%] lg:w-[33%] xl:w-[33%] md:w-[33%] flex flex-row gap-3 items-center justify-center h-[6rem] px-2 font-semibold cursor-pointer bg-[#835C57] rounded-sm">
                <FaMapMarkerAlt className="text-[35px] text-white" />
                <div>
                    <h2 className="   text-white font-bold">Our Location</h2>
                    <p className=" text-gray-700 ">Varanasi Up</p>
                </div>
            </div>

            <div className="w-[100%] lg:w-[33%] xl:w-[33%] md:w-[33%] flex flex-row gap-3 items-center justify-center h-[6rem] px-2 font-semibold cursor-pointer bg-[#835C57] rounded-sm">
                <FaPhoneVolume className="text-[35px] text-white" />
                <div>
                    <h2 className=" text-white font-bold">Customer Support</h2>
                    <p className=" text-gray-700 ">+91 6384597623 </p>
                </div>
            </div>

        </div>
    )
}

export default BannerInfo