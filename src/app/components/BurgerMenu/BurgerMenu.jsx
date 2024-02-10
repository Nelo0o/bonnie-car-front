import Link from 'next/link'
import {useState} from 'react'
import './BurgerMenu.scss'

const NavLink = ({href, text}) => (
   <Link className="burger-menu__nav__link" href={href}>{text}</Link>
);

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  const navLinks = [
    {href: "/", text: "Accueil"},
    {href: "/", text: "Nos véhicules"},
    {href: "/", text: "Estimation"},
    {href: "/", text: "Services"},
    {href: "/", text: "A propos"},
  ];
  
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
              <NavLink key={index} href={link.href} text={link.text}/>
           ))}
         </nav>
       </div>
     </>
  )
}

export default BurgerMenu;