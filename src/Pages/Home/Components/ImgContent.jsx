import React from 'react';


function ImgContent() {
    return (
        <div className="w-full xl:h-[100vh] lg:h-[100vh] md:h-[100vh] h-[fit] xl:py-0 lg:py-0 md:py-0 py-10 bg-white text-black xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row flex flex-col  font-serif">

            <div className='w-[100%] lg:w-[35%] xl:w-[35%] md:w-[100%] py-10 px-10 uppercase leading-tight lg:flex  xl:flex md:flex flex-col items-center justify-center'>

                <h2 className="w-[100%] font-bold xl:text-[2.5rem] lg:text-[3rem] md:text-[2rem] sm:text-[1.5rem] text-[1.5rem] text-center">
                    Live in an award winning 
                </h2>

                <div className="w-[70%] xl:w-[70%] lg:w-[70%] md:w-[70%] h-[2px] bg-[#835C57] mx-auto"></div>

                <p className="w-[100%] font-serif text-[1rem] capitalize mt-5 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laboriosam ullam, exercitationem, aperiam facere et dolorem culpa earum illum amet, ipsum magnam labore beatae delectus! Consequuntur deleniti recusandae ullam explicabo!
                </p>
    
            </div>


            <div className="xl:w-[65%] lg:w-[65%] md:w-[100%] w-[100%]  overflow-hidden">
                <img className="h-[100%] scale-150 hover:scale-100 transition-all duration-[5000ms]" src="../../asset15.jpg" alt="image_asset6" />
               
            </div>


        </div>
    )
}

export default ImgContent;