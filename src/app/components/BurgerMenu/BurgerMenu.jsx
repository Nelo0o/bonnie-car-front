import {useState, useEffect} from 'react'
import Dropdown from "@/app/components/DropDown/DropDown";
import './BurgerMenu.scss'

const navLinks = [
  {href: "/", text: "Accueil", subLinks: []},
  {
    href: "/", text: "Nos véhicules", subLinks: [
      {href: "/collection", text: "Motos"},
      {href: "/", text: "Scooters"},
      {href: "/", text: "Voitures"}
    ]
  },
  {
    href: "/", text: "Estimation", subLinks: [
      {href: "/", text: "Estimer un véhicule"},
      {href: "/", text: "Côté financement"},
      {href: "/", text: "Côté assurance"}
    ]
  },
  {href: "/", text: "Services", subLinks: []},
  {
    href: "/", text: "A propos", subLinks: [
      {href: "/", text: "Les démarches"},
      {href: "/", text: "Côté moto"},
      {href: "/", text: "Côté scooter"},
      {href: "/", text: "Côté voiture"}
    ]
  },
];

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  
  return (
     <>
       <input id="checkbox" type="checkbox"/>
       <label className="toggle" htmlFor="checkbox" onClick={toggleMenu}>
         <div id="bar1" className="bars"></div>
         <div id="bar2" className="bars"></div>
         <div id="bar3" className="bars"></div>
       </label>
       
       <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
         <nav className={`burger-menu__nav`}>
           {navLinks.map((link, index) => (
              <Dropdown
                 href={link.href}
                 text={link.text}
                 subLinks={link.subLinks}
                 key={index}/>
           ))}
         </nav>
       </div>
     </>
  )
}

export default BurgerMenu;