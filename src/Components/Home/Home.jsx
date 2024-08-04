import React from 'react'
import Header from '../Header/Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import FAQs from './Faqs'
import MissionAndValues from './Section5'
import Footer from '../Footer'
import ContactUs from '../ContactUs'
export default function Home() {
  return (
    <>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <FAQs/>
        <MissionAndValues/>
    </>
  )
}
