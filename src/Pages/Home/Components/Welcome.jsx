import React,{ useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Welcome({ data }) {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);


  return (
    <section className='font-serif bg-white text-black w-full h-[20rem] flex flex-col items-center justify-center ' data-aos="zoom-in">
      <h1 className='text-[16px] text-[#bda178] font-semibold uppercase' >{data.title}</h1>
      <h2 className='text-[1.5rem] sm:text-[2rem] md:text-[2rem] xl:text-[3rem] lg:text-[3rem] text-[#042134] uppercase text-center '>{data.subheading}</h2>
      <p className='text-[0.9rem] text-[#575561] leading-8 w-[100%] sm:w-[100%] md:w-[70%] lg:w-[60%] xl:w-[60%] text-center'>{data.paragraph}</p>

    </section>
  )
}

export default Welcome;