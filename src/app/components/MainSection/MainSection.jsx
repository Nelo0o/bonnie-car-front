'use client'

import React, {useState} from 'react';
import './MainSection.scss';
import Button from "@/app/components/Button/Button";
import reactStringReplace from 'react-string-replace';

const GenericButtonGroup = ({items, className, handleItemClick, currentActiveItem, elementType: ElementType = 'button'}) => (
   <div className={className}>
     {items.map(item =>
        <ElementType
           key={item}
           onClick={() => handleItemClick(item)}
           className={item === currentActiveItem ? 'active' : 'inactive'}
        >
          {item}
        </ElementType>)
     }
   </div>
);

const GenericInputGroup = ({items, className, elementType: ElementType = 'input'}) => (
   <div className={className}>
     {items.map(item => <ElementType type="text" placeholder={item} key={item}/>)}
   </div>
);

const uiText = {
  header: "Vente de motos d'occasion entre particuliers.",
  subHeader: "Retrouvez le bon véhicule, avec simplicité",
  buttonText: "Voir les annonces",
  sellContent: {
    text: "Avant de vendre votre véhicule, assurez-vous d’obtenir le meilleur prix ! Estimez votre voiture dès maintenant pour fixer un tarif attractif.",
    buttonText: "Demande d’estimation"
  }
}

const MainSection = () => {
  const {header: headerText, subHeader: subHeaderText, buttonText, sellContent} = uiText;
  const vehicleButtons = ['Motos', 'Scooters', 'Voitures'];
  const inputItems = ['Marque', 'Modèle', 'Prix', 'Energie', 'Localisation'];
  
  const [mode, setMode] = useState('Acheter');
  const [activeVehicle, setActiveVehicle] = useState(vehicleButtons[0]);
  
  const handleVehicleButtonClick = (buttonName) => {
    setActiveVehicle(buttonName);
  }
  
  return (
     <section className="main-section wrapper">
       <div className="content-container page-width">
         <div className="main-section__text">
           <h1>{reactStringReplace(headerText, "motos", (match, i) => <span key={i}>{match}</span>)}</h1>
         </div>
         <div className="main-section__select-container">
           <h2>{subHeaderText}</h2>
           <div className="main-section__select-container__select">
             <GenericButtonGroup
                className={`main-section__select-container__select__btn`}
                items={['Acheter', 'Vendre']}
                handleItemClick={setMode}
                currentActiveItem={mode}
             />
             <div className="main-section__select-container__select__container-inputs">
               {mode === 'Vendre' ?
                  <div className="main-section__select-container__select__container-inputs__sell-content">
                    <p>{sellContent.text}</p>
                    <Button buttonText={sellContent.buttonText}/>
                  </div> :
                  <div>
                    <GenericButtonGroup
                       className="main-section__select-container__select__container-inputs__btn"
                       items={vehicleButtons}
                       handleItemClick={handleVehicleButtonClick}
                       currentActiveItem={activeVehicle}
                    />
                    <GenericInputGroup
                       className="main-section__select-container__select__container-inputs__inputs"
                       items={inputItems}
                    />
                    <Button buttonText={buttonText}/>
                  </div>
               }
             </div>
           </div>
         </div>
       </div>
     </section>
  );
}

export default MainSection;