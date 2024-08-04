import React from 'react';
import {faLightbulb,faPenRuler,faFileCode } from '@fortawesome/free-solid-svg-icons';
import Cards from './Cards';

export default function Section2() {
  return (
    <div className='w-full bg-offWhite my-24 '>
      <div className="flex  flex-col lg:flex-row  items-center justify-evenly py-0 lg:py-10">
          <Cards iconName = {faPenRuler}  heading= "Define Your Vision "text= "Outline your project goals and expectations to guide the development process." />
          <Cards iconName = {faFileCode}  heading= "Coding and QA"text= "The final product is developed through detailed coding and thorough review to ensure excellence." />          
          <Cards iconName = {faLightbulb}  heading= "Design Development"text= "Based on your brief, our team will create and refine the design to meet your specifications." />
      </div>
    </div>
  );
}