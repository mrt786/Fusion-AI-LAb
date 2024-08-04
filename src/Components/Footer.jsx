import React from 'react';
import Hrefs from './Navbar/Hrefs';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-deepCharcoal to-darkCharcoal text-offWhite py-12 relative">
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 opacity-10 py-10">
        <h2 className="text-9xl font-bold tracking-widest rotate-12">
          FUSION AI LAB
        </h2>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-4 text-white">Fusion AI Lab</h2>
            <p className="text-offWhite leading-relaxed">
            Welcome to Fusion AI Lab, your all-in-one IT partner dedicated to delivering expertise across a broad spectrum of technologies. Our commitment to technological excellence and innovation drives us to constantly evolve and offer top-notch IT solutions tailored to your needs. Our core services include Artificial Intelligence, Web3, Mobile Applications, and other cutting-edge IT solutions. Partner with us to harness advanced technologies and propel your business forward.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-8 flex-1">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-white ">Quick Links</h3>
              <ul className="space-y-2">
                <Hrefs text = "Home" link= "/"  className='hover:text-lightGray  transition-colors'/>
                <Hrefs text= "About Us" link ="/about" className='hover:text-lightGray  transition-colors' />
                <Hrefs text= "Services" link ="/services" className='hover:text-lightGray  transition-colors' />
                <Hrefs text= "Portfolio" link ="/portfolio" className='hover:text-lightGray  transition-colors' />
              </ul>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-white ">Contact Us</h3>
              <ul className="space-y-2">
                <li><a href="mailto:info@fusionailab.com" className="hover:text-white  transition-colors">info@fusionailab.com</a></li>
                <li><a href="tel:+1234567890" className="hover:text-white  transition-colors">03205004607</a></li>
                <li>Paris Plaza, Khyaban-e-Sir Syed, Rawalpindi</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-lightGray mt-6 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fusion AI Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
