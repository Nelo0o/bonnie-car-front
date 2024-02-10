import React from "react";
import './FooterLinks.scss';
import Link from "next/link";
import Image from "next/image";

const LinksGroup = ({title, links}) => (
   <li>
     <h3>{title}</h3>
     {links.map((link, index) => <Link key={index} href={link.href}>{link.text}</Link>)}
   </li>
);

const IconLink = ({href, src, alt, text}) => (
   <Link href={href}>
     <Image src={src} alt={alt} width={50} height={50}/>
     {text}
   </Link>
);

const FooterLinks = () => {
  const usefulLinks = [
    {href: '#', text: 'Nos véhicules'},
    {href: '#', text: 'À propos'},
    {href: '#', text: 'Comment ça marche'},
    {href: '#', text: 'Blog'},
  ];
  
  const infoLinks = [
    {href: '#', text: 'Mentions légales'},
    {href: '#', text: 'Politique de confidentialité'},
    {href: '#', text: 'Politique de retours'},
    {href: '#', text: 'CGV'},
  ];
  
  const accountLinks = [
    {href: '#', text: 'Se connecter'},
    {href: '#', text: 'Se déconnecter'},
  ];
  
  const addressText = 'Bonnie&Car 18 rue Jules Vallès Paris 75011 France';
  
  return (
     <div className="container-links">
       <ul className="container-links__links">
         <LinksGroup title="Liens utiles" links={usefulLinks}/>
         <LinksGroup title="Informations pratiques" links={infoLinks}/>
         <LinksGroup title="Mon compte" links={accountLinks}/>
         <li>
           <h3>Nous contacter</h3>
           <IconLink href="#" src="/assets/icons/location.svg" alt="location" text={addressText}/>
           <IconLink href="tel:0975185648" src="/assets/icons/phone.svg" alt="phone" text="+ (0)9 75 18 56 48"/>
           <IconLink href="mailto:contact@bonnieandcar.com" src="/assets/icons/mail.svg" alt="mail" text="contact@bonnieandcar.com"/>
         </li>
       </ul>
     </div>
  );
}

export default FooterLinks;