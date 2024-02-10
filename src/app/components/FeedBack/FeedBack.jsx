import React from "react";
import './FeedBack.scss';
import Image from "next/image";

const FeedBack = () => {
  return (
     <section className="feedback">
       <ul className="feedback__card-container wrapper">
         <li className="feedback__card-container__card">
           <div className="feedback__card-container__card__header">
             <h3>Sofia</h3>
             <span>Professeur en Lycée Professionnel</span>
           </div>
           <div className="feedback__card-container__card__img">
             <Image src={"assets/images/customer-4.png"} alt={"Sofia"} width={200} height={200}/>
           </div>
           <div className="feedback__card-container__card__text">
             <p>
               “Très bonne expérience d’achat, démarche facile et un immense gain de temps. La présence de l’agent de
               Bonnie & Car a été bien rassurante pour moi en tant qu’acheteuse non expérimentée.
               Je recommande vivement l’expertise et le professionnalisme de Bonnie&Car.”
             </p>
           </div>
           <div className="feedback__card-container__card__background"></div>
         </li>
         <li className="feedback__card-container__card">
           <div className="feedback__card-container__card__header">
             <h3>Maxime</h3>
             <span>Cavalier Professionnel au Puy du Fou</span>
           </div>
           <div className="feedback__card-container__card__img">
             <Image src={"assets/images/customer-3.png"} alt={"Sofia"} width={200} height={200}/>
           </div>
           <div className="feedback__card-container__card__text">
             <p>
               “Le concept de Bonnie&Car m’a tout de suite séduit ! Très réactif, accueillant, disponible, toute les
               démarches sont expliquées, un vrai dialogue s’installe entre le conseiller de Bonnie&Car et l’acquéreur
               qui a su me rassurer sur le véhicule que j’avais vu sur internet.”
             </p>
           </div>
           <div className="feedback__card-container__card__background"></div>
         </li>
         <li className="feedback__card-container__card">
           <div className="feedback__card-container__card__header">
             <h3>Esther</h3>
             <span>Professeur en Lycée Professionnel</span>
           </div>
           <div className="feedback__card-container__card__img">
             <Image src={"assets/images/customer-2.png"} alt={"Sofia"} width={200} height={200}/>
           </div>
           <div className="feedback__card-container__card__text">
             <p>
               “Je recommande fortement Bonnie&Car. C'est une société sérieuse qui m'a permis d'éviter les conflits et
               les arnaques entre particuliers. Leur prestation est rapide et leurs Agents de terrain sont efficaces et
               très professionnels”
             </p>
           </div>
           <div className="feedback__card-container__card__background"></div>
         </li>
         <li className="feedback__card-container__card">
           <div className="feedback__card-container__card__header">
             <h3>Anthony</h3>
             <span>Gendarme</span>
           </div>
           <div className="feedback__card-container__card__img">
             <Image src={"assets/images/customer-1.png"} alt={"Sofia"} width={200} height={200}/>
           </div>
           <div className="feedback__card-container__card__text">
             <p>
               “J'ai été agréablement surpris de découvrir un service comme celui proposé par Bonnie&Car, spécialistes
               de la vente entre particuliers. L'agent qui s'est occupé de moi s'est toujours montré très disponible
               pour répondre à mes questions sur le véhicule que je souhaitais acquérir”
             </p>
           </div>
           <div className="feedback__card-container__card__background"></div>
         </li>
       </ul>
     </section>
  );
}

export default FeedBack;