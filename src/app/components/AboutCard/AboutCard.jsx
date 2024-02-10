import React from "react";
import './AboutCard.scss';
import Image from "next/image";
import Button from "@/app/components/Button/Button";

const AboutCard = () => {
  return (
     <section className="about-card wrapper">
       <div className="about-card__card">
         <div className="about-card__card__container-image">
           <Image src={"/assets/images/moto-jaune.png"} alt={"moto"} width={500} height={500}/>
         </div>
         <div className="about-card__card__infos">
           <h2>Notre entreprise</h2>
           <p>
             Depuis 2016, la start-up Bonnie&Car a simplifié et sécurisé la vente entre particuliers de plus de 1000
             automobiles et motos.
             Imaginez pouvoir vendre ou acheter votre véhicule en toute confiance, avec la garantie d'une transaction
             sécurisée et transparente. C'est ce que Bonnie&Car vous offre depuis le début, et maintenant..
           </p>
           <Button buttonText={"En savoir plus"}/>
         </div>
       </div>
       <Image src={"/assets/icons/lines.svg"} alt={"lines"} width={500} height={500}/>
     </section>
  );
}

export default AboutCard;