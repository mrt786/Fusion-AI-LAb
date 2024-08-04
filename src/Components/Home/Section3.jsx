import React,{useState} from 'react'

export default function Section3() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      
      <div className='mx-12 rounded-lg my-24 bg-gradient-to-r from-slate-100 to-slate-500'>
            <div className='flex flex-col md:flex-row p-10 justify-between'>
                <div >
                        <h2 className='text-center text-darkCharcoal text-6xl font-extrabold'>
                            10K+
                            <h3 className='text-4xl font-extrabold leading-loose'>
                                HAPPY CLIENTS
                            </h3>
                        </h2>
                </div>
                <div className='flex items-center  bg-gray-300 rounded-xl px-10'>
                    <h2 className='text-center text-3xl font-extrabold'>
                        50K+ PROJECTS COMPLETED ACROSS THE WORLD
                    </h2>
                </div>
            </div>
        </div>
        <div>
            <div className='mx-20 my-6 bg-gray-300 -light rounded-lg py-10 '>
                <h1 className='uppercase text-center text-black font-extrabold text-2xl py-6 '>
                    Unveiling The AI Mastermind
                </h1>
                <div
                    className={`relative text-start md:text-center text-xl leading-loose px-5 md:px-24 text-deepCharcoal font-bold ${isHovered ? 'max-h-full' : 'max-h-28'} overflow-hidden transition-all duration-200`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                    Fusion AI Lab, at the forefront of innovation,
                    is leading a revolutionary change in the tech industry. 
                    Specializing in Artificial Intelligence, we leverage machine learning, 
                    neural networks, and sophisticated algorithms
                    to create intelligent solutions that transform business operations.
                </div>  
            </div>
        </div>
    </div>
    
  )
}
