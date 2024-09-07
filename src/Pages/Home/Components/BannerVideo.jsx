import React from 'react'

function BannerVideo() {
  return (
      <section className="w-full text-white h-[40vh]">
        
          <video width="100%" autoPlay muted loop >
              <source src="../../water-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <h2></h2>

      </section>
  )
}

export default BannerVideo