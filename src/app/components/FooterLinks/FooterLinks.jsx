import React from "react";
import './FooterLinks.scss';
import Link from "next/link";
import Image from "next/image";

const FooterLinks = () => {
  return (
     <div className="container-links">
       <ul className="container-links__links">
         <li>
           <h3>Liens utiles</h3>
           <Link href={'#'}>Nos véhicules</Link>
           <Link href={'#'}>À propos</Link>
           <Link href={'#'}>Comment ça marche</Link>
           <Link href={'#'}>Blog</Link>
         </li>
         <li>
           <h3>Informations pratiques</h3>
           <Link href={'#'}>Mentions légales</Link>
           <Link href={'#'}>Politique de confidentialité</Link>
           <Link href={'#'}>Politique de retours</Link>
           <Link href={'#'}>CGV</Link>
         </li>
         <li>
           <h3>Mon compte</h3>
           <Link href={'#'}>Se connecter</Link>
           <Link href={'#'}>Se déconnecter</Link>
         </li>
         <li>
           <h3>Nous contacter</h3>
           <Link href={'#'}><Image src={"/assets/icons/location.svg"} alt={"location"} width={50} height={50}/>Bonnie&Car 18 rue Jules Vallès Paris 75011
                                                                               France</Link>
           <Link href={'tel:0975185648'}><Image src={"/assets/icons/phone.svg"} alt={"phone"} width={50} height={50}/>+ (0)9 75 18 56 48</Link>
           <Link href={'mailto:contact@bonnieandcar.com'}><Image src={"/assets/icons/mail.svg"} alt={"mail"} width={50} height={50}/>contact@bonnieandcar.com</Link>
         </li>
       </ul>
     </div>
  );
}

export default FooterLinks;