import React from "react";
import './AboutCard.scss';
import Image from "next/image";
import Button from "@/app/components/Button/Button";

const CardImage = ({src, alt, width, height}) => (
   <div className="about-card__card__container-image">
     <Image src={src} alt={alt} width={width} height={height}/>
   </div>
);

const CardContent = ({header, children, buttonText}) => (
   <div className="about-card__card__infos">
     <h2>{header}</h2>
     <p>
       {children}
     </p>
     <Button buttonText={buttonText}/>
   </div>
);

const AboutCard = () => {
  const content = `
    Depuis 2016, la start-up Bonnie&Car a simplifié et sécurisé la vente entre particuliers de plus de 1000
    automobiles et motos.
    Imaginez pouvoir vendre ou acheter votre véhicule en toute confiance, avec la garantie d'une transaction
    sécurisée et transparente. C'est ce que Bonnie&Car vous offre depuis le début, et maintenant..
    `;
  
  return (
     <section className="about-card wrapper">
       <div className="about-card__card">
         <CardImage src={"/assets/images/moto-jaune.png"} alt={"moto"} width={500} height={500}/>
         <CardContent header='Notre entreprise' buttonText='En savoir plus'>
           {content}
         </CardContent>
       </div>
       <div className="about-card__card-image-wrapper">
         <CardImage src={"/assets/icons/lines.svg"} alt={"lines"} width={500} height={500}/>
       </div>
     </section>
  );
}

export default AboutCard;