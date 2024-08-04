import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Cards({iconName , heading , text}) {
  return (
        <div className='max-w-xs py-10' >
          <div className='p-4 rounded-xl flex justify-center'>
            <div className='bg-offWhite-dark rounded-xl p-4 hover:bg-gray-300'>
                <FontAwesomeIcon className='h-12 w-12' icon={iconName} />
            </div>
          </div>
          <h1 className='text-center py-3 text-darkCharcoal font-bold text-xl'>
              {heading}
          </h1>
          <h3 className='text-md leading-loose'>
              {text}
          </h3>
      </div>
  )
}
