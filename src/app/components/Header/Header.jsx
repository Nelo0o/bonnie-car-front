'use client'

import React from 'react';
import './Header.scss';
import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import Image from "next/image";

const Header = ({showAccountIcon = true, showLogo = true}) => {
  return (
     <header className="wrapper">
       <>
         <BurgerMenu/>
         {showAccountIcon && <Image src={"/assets/icons/account.svg"} alt={"account-logo"} width={200} height={200}/>}
         {showLogo && <Image src={"/assets/logo/logo.png"} alt={"logo"} width={200} height={200}/>}
       </>
     </header>
  );
};

export default Header;