import React from "react";
import './Reinsurance.scss';
import Image from "next/image";

const Reinsurance = () => {
  return (
     <section className="reinsurance">
       <div className="reinsurance__infos wrapper page-width">
         <h2>Pourquoi allez chez <span>Bonnie & Car</span></h2>
         <ul className="reinsurance__infos__card">
           <li>
             <Image src={"/assets/icons/document.svg"} alt={"document"} width={100} height={100}/>
             <h3>Simplicité</h3>
             <p>
               Nous nous occupons de tout, de l'évaluation à la sécurisation du paiement... Pour une expérience fluide
               et
               sans tracas.
             </p>
           </li>
           <li>
             <Image src={"/assets/icons/expert.svg"} alt={"expert"} width={100} height={100}/>
             <h3>Expertise</h3>
             <p>
               Bonnie & Car allie expertise pointue et conseils personnalisés pour des estimations précises, des
               démarches
               simplifiées et un accompagnement sur mesure dans chaque étape de votre projet automobile.
             </p>
           </li>
           <li>
             <Image src={"/assets/icons/lock.svg"} alt={"lock"} width={100} height={100}/>
             <h3>Sécurité</h3>
             <p>
               Bonnie & Car place la sécurité au cœur de ses priorités, assurant des transactions entièrement sécurisées
               et protégées.
             </p>
           </li>
         </ul>
       </div>
     </section>
  );
}

export default Reinsurance;