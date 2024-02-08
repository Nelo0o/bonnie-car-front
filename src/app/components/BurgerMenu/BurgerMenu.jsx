import Link from 'next/link'
import {useState} from 'react'
import './BurgerMenu.scss'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
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
           <Link className="burger-menu__link" href="/">Accueil</Link>
           <Link className="burger-menu__link" href="/">Nos véhicules</Link>
           <Link className="burger-menu__link" href="/">Estimation</Link>
           <Link className="burger-menu__link" href="/">Services</Link>
           <Link className="burger-menu__link" href="/">A propos</Link>
         </nav>
       </div>
     </>
  )
}

export default BurgerMenu;