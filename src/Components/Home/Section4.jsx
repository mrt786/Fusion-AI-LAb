import React from 'react'
import mlImg from '/ml.png'
import aiImg from '/AI.png'
import annImg from '/NN.png'
import Section4Cards from './Section4Cards.jsx'
import Connect from '/connection.mp4'
import Button from '../Button.jsx'
export default function Section4() {
  return (
   <>
     <div className='bg-tinyDotsImg bg-cover h-full md:h-screen  my-20'>
        <div className='flex flex-col md:flex-row justify-evenly items-center h-full space-y-8 md:space-y-0 px-4 md:px-8 py-10 md:py-0'>
               <Section4Cards  Img = {mlImg} heading="Machine Learning Mastery"  text="We specialize in creating intelligent
                       algorithms for predictive analytics, pattern recognition, and decision-making." />
                <Section4Cards Img = {aiImg} heading="Ethical Intelligence"  text="We understand the importance of treating AI as a tool
                      rather than an infallible oracle, constantly questioning
                      and analyzing the results it produces." />
                <Section4Cards className ="px-3" Img = {annImg} heading="Natural Language Processing "  text="Our NLP expertise spans from sentiment
                 analysis to language translation, enabling us to interpret and respond to the subtle nuances of human language." />
                
        </div>
    </div>

    <div className='bg-gradient-to-r from-lightCharcoal to-deepCharcoal  my-20'>
        <div className='p-10 flex flex-col lg:flex-row justify-evenly items-center space-y-10 lg:space-y-0 '>
          <Button text = "Lets Connect" className = 'py-4 text-3xl' href="/contact" />
          <h4 className='min-w-sm max-w-md text-3xl font-extrabold text-offWhite-darker'>
              Sharing Knowledge. Fostering Connections.
          </h4>
          <video className='w-32 rounded-full' autoPlay muted loop>
              <source src= {Connect} type="video/mp4"  />
                  Your browser does not support the video tag.
            </video>
        </div>
    </div>
   </>
    
  )
}
