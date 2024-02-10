import React from "react";
import './FeedBack.scss';
import Image from "next/image";

const FeedbackCard = ({name, role, imgSrc, feedback}) => (<li className="feedback__card-container__card">
  <div className="feedback__card-container__card__header">
    <h3>{name}</h3>
    <span>{role}</span>
  </div>
  <div className="feedback__card-container__card__img">
    <Image src={imgSrc} alt={name} width={200} height={200}/>
  </div>
  <div className="feedback__card-container__card__text">
    <p>{feedback}</p>
  </div>
  <div className="feedback__card-container__card__background"></div>
</li>);

const FeedBack = () => (<section className="feedback">
  <ul className="feedback__card-container wrapper page-width">
    <FeedbackCard
       name="Sofia"
       role="Professeur en Lycée Professionnel"
       imgSrc="/assets/images/customer-4.png"
       feedback="
       “Très bonne expérience d’achat, démarche facile et un immense gain de temps.
        La présence de l’agent de Bonnie & Car a été bien rassurante pour moi en tant qu’acheteuse non expérimentée.
        Je recommande vivement l’expertise et le professionnalisme de Bonnie&Car.”"
    />
    <FeedbackCard
       name="Maxime"
       role="Cavalier Professionnel au Puy du Fou"
       imgSrc="/assets/images/customer-3.png"
       feedback="
       “Le concept de Bonnie&Car m’a tout de suite séduit ! Très réactif, accueillant, disponible, toute les démarches
       sont expliquées, un vrai dialogue s’installe entre le conseiller de Bonnie&Car et l’acquéreur qui a su me
       rassurer sur le véhicule que j’avais vu sur internet.”"
    />
    <FeedbackCard
       name="Esther"
       role="Professeur en Lycée Professionnel"
       imgSrc="/assets/images/customer-2.png"
       feedback="
       “Je recommande fortement Bonnie&Car. C'est une société sérieuse qui m'a permis d'éviter les conflits et les
       arnaques entre particuliers. Leur prestation est rapide et leurs Agents de terrain sont efficaces et
       très professionnels”"
    />
    <FeedbackCard
       name="Anthony"
       role="Gendarme"
       imgSrc="/assets/images/customer-1.png"
       feedback="
       “J'ai été agréablement surpris de découvrir un service comme celui proposé par Bonnie&Car, spécialistes de la
       vente entre particuliers. L'agent qui s'est occupé de moi s'est toujours montré très disponible pour répondre à
       mes questions sur le véhicule que je souhaitais acquérir”"
    />
  </ul>
</section>);

export default FeedBack;