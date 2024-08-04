import React from 'react'
import { Link } from 'react-router-dom'
export default function Hrefs({text, link,className ="cursor-pointer  m-3 mx-6 text-xl hover:text-lightCharcoal  "} ) {
  return (
    <>
        <li className = {`${className}  transition-colors list-none`}>
            <Link to= {link}>
                {text}
            </Link>
        </li>
    </>
  )
}
