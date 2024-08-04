import React from 'react'

export default function Section4Cards({Img, heading, text , className=""}) {
  return (
        <div className='bg-offWhite rounded-md max-w-xs leading-loose min-h-auto max-h-xl hover:bg-lightGray group'>
            <div className={ `flex items-start justify-center ${className}`}>
                <img className= "p-5 md:p-10" src= {Img} alt="" />
            </div>
            <h1 className='text-center font-extrabold text-lg my-2 group-hover:text-lightCharcoal '> 
                    {heading}
            </h1>
            <h4 className='text-center block group-hover:hidden italic text-lightCharcoal'>
                Explore Me
            </h4>
            <h4 className='text-center p-4 hidden group-hover:block'>
                {text}
            </h4>
        </div>

  )
}
