'use client'

import React from "react";
import './Footer.scss';
import Form from "@/app/components/Form/Form";
import FooterLinks from "@/app/components/FooterLinks/FooterLinks";
import Socials from "@/app/components/Socials/Socials";
import Image from "next/image";

const Footer = () => {
  return (
     <>
     <footer className="footer wrapper page-width">
       <div className="footer__container-contact">
         <div className="footer__container-contact__infos">
           <h3>Contactez nous</h3>
           <p>Nous sommes impatients de vous accompagner dans le choix de votre prochain véhicule !</p>
         </div>
         <div className="footer__container-contact__form">
           <Form/>
         </div>
       </div>
       <div className="footer__image-wrapper">
         <Image src={'/assets/images/route-footer.png'} alt={"route-footer"} width={500} height={500}/>
       </div>
       <FooterLinks/>
       <Socials/>
       <Image src={'/assets/icons/moto-footer.svg'} alt={"moto"} width={500} height={500}/>
     </footer>
     </>
  );
}

export default Footer;