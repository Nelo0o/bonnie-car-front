import React from "react";
import './DropDown.scss';


import {useState} from 'react'
import Link from 'next/link'

export default function Dropdown({href, text, subLinks}) {
  const [isOpen, setIsOpen] = useState(false)
  
  const openDropdown = () => {
    setIsOpen(true)
  }
  
  const closeDropdown = () => {
    setIsOpen(false)
  }
  
  return (
     <div className="container-links-list" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
       <Link className="container-links-list__link" href={href}>{text}</Link>
       {subLinks.length > 0 && (
          <ul className={`container-links-list__list ${isOpen ? 'open' : ''}`}>
            {subLinks.map((link, index) => (
               <li className="container-links-list__list__items" key={index}>
                 <Link href={link.href}>{link.text}</Link>
               </li>
            ))}
          </ul>
       )}
     </div>
  )
}