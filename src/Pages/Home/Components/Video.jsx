import React from 'react'

function Video() {

    return (
        <>
            <section className="w-full ">
                <video width="100%" autoPlay muted loop >
                    <source src="../../banner_main.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                {/* <img
                    className='w-[200px] h-[200px] absolute top-[30vh] lg:top-[85vh] xl:top-[85vh] md:bottom-[-10%] left-[35%]  lg:left-[45.4%] ' src="../../logo-white.svg" alt="images"
                /> */}
                   

                {/* <h1 
                    className='absolute top-[30vh] lg:top-[105vh] xl:top-[105vh] md:bottom-[-10%] left-[35%]  lg:left-[45.4%] '
                    >
                        SCROLL DOWN
                    </h1>
                <h1 
                    className='absolute top-[33vh] lg:top-[110vh] xl:top-[110vh] md:bottom-[-20%] ] left-[49%] w-[1px] lg:h-[60px] xl:h-[60px] h-[35px] bg-white'
                    ></h1> */}

            </section>
        </>
    )
}

export default Video