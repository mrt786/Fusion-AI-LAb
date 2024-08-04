import React,{useState} from 'react'
import Hrefs from './Hrefs'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='ml-14 w-auto lg:w-full z-10  '>
      <div className='lg:flex hidden justify-evenly'>
          <div className='lgflex justify-evenly items-center'>
              <ul className=' flex border-4 border-lightGray rounded-3xl bg-softBeige'>
                      <Hrefs text= "Home" link ="/" />
                      <Hrefs text= "About Us" link ="/about" />
                      <Hrefs text= "Services" link ="/services" />
                      <Hrefs text= "Portfolio" link ="/portfolio" />
              </ul>
          </div>
          <Button text = "Contact Us" className = "" href= "/contact"/>
      </div>
        <div className="lg:hidden flex justify-end items-center pt-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-lightGray focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
        className={`overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-t from-slate-400 to-slate-100 p-3 rounded-lg ${
          isOpen ? 'max-h-96 opacity-100 flex-col' : 'max-h-0 opacity-0'
        } lg:hidden`}
        style={{ transition: 'max-height 2s ease-in-out, opacity 0.5s ease-in-out' }}
      >
                      <Hrefs text= "Home" link ="/" />
                      <Hrefs text= "About Us" link ="/about" />
                      <Hrefs text= "Services" link ="/services" />
                      <Hrefs text= "Portfolio" link ="/portfolio" />
                      <Hrefs text= "Contact Us" link ="/contact" />
          </div>
    </nav>
    
  )
}
