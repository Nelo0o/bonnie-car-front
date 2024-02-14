'use client'

import React, {useState, useEffect} from 'react';
import './Header.scss';
import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import Image from "next/image";

const Header = ({showAccountIcon = true, showLogo = true}) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const changeBackgroundOnScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
    };
    
    window.addEventListener('scroll', changeBackgroundOnScroll);
    
    return () => {
      window.removeEventListener('scroll', changeBackgroundOnScroll);
    };
  }, []);
  
  return (
     <header className="wrapper" style={{
       background: scrolled ? '#070603' : 'rgba(255, 255, 255, 0.05)'
     }}>
       <>
         <div className="magic"></div>
         <BurgerMenu/>
         {showAccountIcon && <Image src={"/assets/icons/account.svg"} alt={"account-logo"} width={200} height={200}/>}
         {showLogo && <Image src={"/assets/logo/logo.png"} alt={"logo"} width={200} height={200}/>}
       </>
     </header>
  );
};

export default Header;