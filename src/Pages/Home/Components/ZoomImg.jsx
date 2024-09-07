import React from 'react'

function ZoomImg({imgSrc}) {
    return (
        <>
            <div className="overflow-hidden relative font-serif">
                <img
                    className=" scale-150 hover:scale-100 transition-all duration-[5000ms]"
                    src={imgSrc}
                    alt="images"
                />

                {/* <div className="bg-gray-200 bg-transparent  absolute top-[45%] left-[40vw]  rounded-lg flex items-left justify-left">
                    <div className="right_child w-full lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-1/2 flex flex-col items-center lg:items-left justify-center cursor-pointer p-5 text-left font-serif ">

                        <h2 className="text-[2.5rem] font-semibold mb-5 flex items-center justify-center text-[#042134]">  Heading  </h2>

                        <p className="w-full text-center text-[#9e5d5d] text-[1.3rem]">
                           Nesciunt laboriosam reiciendis reprehenderit molestias 
                        </p>

                        <button className=" mt-5 px-12 py-1 font-thin bg-black text-white hover:bg-white hover:text-black hover:border-[1px] border-black duration-1000">Enquire now</button>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default ZoomImg