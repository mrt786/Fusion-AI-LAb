import React from 'react'
import '../Video.css'
import Video from '/Home1.mp4'
export default function Section1() {
  return (
    <div>
        <div className="video-container">
          <video className="video-background" autoPlay muted loop>
            <source src= {Video} type="video/mp4"  />
                Your browser does not support the video tag.
          </video>
          <div className="content-overlay uppercase text-center w-full">
              <h1 className=' text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-offWhite pb-6 font-extrabold'>
                    From Innovation
                    <h3 className=' text-xl sm:text-3xl lg:text-5xl text-end pt-6'>
                      to Boundless Horizons
                    </h3>
              </h1>
          </div>
        </div>
    </div>
  )
}

