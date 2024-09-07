import React from 'react';


function ImgContent_2() {
    return (
        <div className="w-full h-[100vh] bg-white text-black flex flex-row">
            <div className="w-[65%] h-[100%] overflow-hidden">
                <img className="h-[100%] scale-150 hover:scale-100 transition-all duration-[5000ms]" src="../../asset6.webp" alt="image_asset6" />

            </div>

            <div className='w-[30%] h-[100vh] pt-[30%] px-[1rem] font-bold text-[3rem] uppercase leading-tight font-serif'>
                Live in an award winning/ <br /> <span className="font-thin"> masterpiece</span>
            </div>
            
        </div>
    )
}

export default ImgContent_2;