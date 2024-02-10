import React from 'react';
import './Reinsurance.scss';
import Image from 'next/image';

const reinsuranceData = [
  {
    src: "/assets/icons/document.svg",
    alt: "document",
    title: "Simplicité",
    description:
       "Nous nous occupons de tout, de l'évaluation à la sécurisation du paiement... Pour une expérience fluide et sans tracas.",
  },
  {
    src: "/assets/icons/expert.svg",
    alt: "expert",
    title: "Expertise",
    description:
       "Bonnie & Car allie expertise pointue et conseils personnalisés pour des estimations précises, des démarches " +
       "simplifiées et un accompagnement sur mesure dans chaque étape de votre projet automobile.",
  },
  {
    src: "/assets/icons/lock.svg",
    alt: "lock",
    title: "Sécurité",
    description:
       "Bonnie & Car place la sécurité au cœur de ses priorités, assurant des transactions entièrement sécurisées et protégées.",
  },
];

const ReinsuranceCard = ({src, alt, title, description}) => (
   <li>
     <Image src={src} alt={alt} width={100} height={100}/>
     <h3>{title}</h3>
     <p>{description}</p>
   </li>
);

const Reinsurance = () => (
   <section className="reinsurance">
     <div className="reinsurance__infos wrapper page-width">
       <h2>Pourquoi allez chez <span>Bonnie & Car</span></h2>
       <ul className="reinsurance__infos__card">
         {
           reinsuranceData.map((data, index) => (
              <ReinsuranceCard
                 key={index}
                 src={data.src}
                 alt={data.alt}
                 title={data.title}
                 description={data.description}/>
           ))
         }
       </ul>
     </div>
   </section>
);

export default Reinsurance;