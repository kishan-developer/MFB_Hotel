import React,{ useEffect } from 'react'
import Video from './Components/Video';
import Welcome from './Components/Welcome';
import ZoomImg from './Components/ZoomImg';
import Form from './Components/Form';
import BannerVideo from './Components/BannerVideo';
import BannerInfo from './Components/BannerInfo';
import Cards from './Components/Cards';
import SpecialCards from './Components/SpecialCards';
import ImgContent from './Components/ImgContent';
import ImgContent_2 from './Components/imgContent_2';
import AnimText from './Components/AnimText';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ContactForm from './Components/ContactForm';


function Home() {

  useEffect(() => {
    AOS.init({ duration: 3000 })
  }, []);

  // content object data
  const data = [
    {
      title: "Welcome to",
      subheading: "The ORLA Collection",
      paragraph: "Two distinct residences form a singular exclusive destination sharing world-class amenities."
    },

    {
      title: "Welcome to the Infinite",
      subheading: "ORLA Infinity",
      paragraph: "A destination for open-minded individuals seeking resort-style living as part of everyday life, effortlessly blending with the surrounding sand and sea to embrace clarity and rejuvenation."
    },

    {
      title: "Designed to perfection",
      subheading: "DIA Mansion",
      paragraph: "An architectural masterpiece crafted for those who appreciate life's finest moments, where every corner showcases the epitome of elegance and refinement."
    },
    {
      title: "Above all else",
      subheading: "Sky Palaces",
      paragraph: "Embrace living in the sky within The ORLA Collection, from the first light of sunrise above the horizon to the final golden rays shimmering over the sea below."
    },

    {
      title: "The Residences",
      subheading: "Residences that stand apart",
      paragraph: "Thoughtfully positioned, each residence beautifully blends indoor and outdoor spaces, capturing breathtaking views of the seascapes and the city beyond."
    },
    
  ]
  
  // imges link
  const imgSrc = ["../../asset1.webp", "../../asset2.webp", "../../asset9.jpg", "../../asset4.webp", "../../asset5.webp"];


  // card data 
    //      room img , price , title , details
    const cardData = [
      {
        title:"Title",
        price : 3000,
        description : "descripton details"
      },
      {
        title: "title",
        price: 2000,
        description : "descrioption"
      },
      {
        title: "title",
        price: "7000",
        description : "descripton"  
      }
    ]
  

    


  return (
    <div className="w-full">

      <div className="w-full ">
        <Video />
      </div>

      {/* <div className="w-full" data-aos="fade-up">
        <BannerInfo />
      </div> */}
      

      {/* <AnimText/> */}

      <div className="w-full" >
        <ImgContent />
      </div>

      <div className="w-full " >
        <AnimText />
      </div>
      

      <div className="w-full" data-aos="fade-up">
        <SpecialCards />
      </div>
      
     

      
      <div className="w-full" data-aos="fade-up">
        <Welcome data={data[1]} />
      </div>


      <div className="w-full" >
        <ZoomImg imgSrc={imgSrc[1]} />
      </div>
      {/* <ZoomImg imgSrc={imgSrc[1]} /> */}

      {/* <Welcome data={data[2]} />
      <ZoomImg imgSrc={imgSrc[2]} /> */}

      

      <Welcome data={data[3]} />
      {/* <ImgContent_2 /> */}
      <div className="w-full" >
        <ZoomImg imgSrc={imgSrc[3]} />
      </div>


      {/* <ZoomImg imgSrc={imgSrc[2]} /> */}
      
      {/* <BannerVideo  /> */}
      {/* <ZoomImg imgSrc={imgSrc[3]} /> */}

      {/* <Welcome data={data[4]} />
      <ZoomImg imgSrc={imgSrc[4]} /> */}

      {/* <BannerVideo /> */}

      {/* <Form/> */}
      <ContactForm/>

    
     
    </div>
  )
}

export default Home;