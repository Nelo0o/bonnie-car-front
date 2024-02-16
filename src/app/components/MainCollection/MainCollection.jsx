'use client'

import React, {useState, useEffect} from "react";
import './MainCollection.scss';
import AdCard from "@/app/components/AdCard/AdCard";
import getVehicleData from "@/app/lib/api";

// Filtrer la section des composants
const InputGroup = ({ placeholder1, placeholder2 }) => (
   <>
     <input type="text" placeholder={placeholder1} />
     <input type="text" placeholder={placeholder2} />
   </>
);

const SelectGroup = ({ options }) => (
   <select name="carType" id="carType">
     {options.map((option, index) => (
        <option key={index} value={option.toLowerCase()}>
          {option}
        </option>
     ))}
   </select>
);

const MainCollection = () => {
  const [vehicleData, setVehicleData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getVehicleData();
      setVehicleData(data);
    };
    fetchData();
  }, []);
  
  if (!vehicleData) {
    return <div>Loading...</div>;
  }
  
  return (
     <section className="main-collection wrapper">
       <h1>Nos <span>motos</span> ({vehicleData.length} annonces)</h1>
       <div className="main-collection__filters">
         <h2>Filtres</h2>
         <div className="main-collection__filters__model">
           <h3>Marque/Modèle</h3>
           <InputGroup placeholder1="Marque" placeholder2="Modèle"/>
         </div>
         <div className="main-collection__filters__price">
           <div className="main-collection__filters__price__price-content">
             <h3>Prix</h3>
             <InputGroup placeholder1="Min" placeholder2="Max"/>
           </div>
           <input type="range" />
         </div>
         <div className="main-collection__filters__specifics">
           <h3>Caractéristiques</h3>
           <div className="main-collection__filters__specifics__year">
             <h4>Année</h4>
             <InputGroup placeholder1="Min" placeholder2="Max"/>
           </div>
           <div className="main-collection__filters__specifics__couleur">
             <h4>Km</h4>
             <InputGroup placeholder1="Min" placeholder2="Max"/>
           </div>
         </div>
         <div className="main-collection__filters__energy">
           <h3>Type énergie</h3>
           <SelectGroup options={["Essence", "Diesel", "Electric"]} />
         </div>
         <div className="main-collection__filters__color">
           <h3>Couleur</h3>
           <SelectGroup options={["Rouge", "Bleu", "Vert"]} />
         </div>
         <div className="main-collection__filters__location">
           <h3>Localisation</h3>
           <input type="text" placeholder="Code postale" />
           <span>Dans un rayon de :</span>
           <input type="range" />
         </div>
       </div>
       <div className="main-collection__container-cards">
         {vehicleData.map(vehicle => (
            <AdCard key={vehicle.id}
                    src={vehicle.images[0]}
                    alt={vehicle.title}
                    price={vehicle.price.toString()}
                    title={vehicle.title}
                    model={vehicle.model}
                    cc={vehicle.cc_hp + 'cc'}
                    km={vehicle.kilometers.toString() + 'km'}
                    year={vehicle.year.toString()}
                    ratings={[
                      { label: 'CARROSSERIE', value: 3 },
                      { label: 'MÉCANIQUE', value: 5 },
                      { label: 'SUIVI ENTRETIEN', value: 4 }
                    ]}
            />
         ))}
       </div>
     </section>
  );
}

export default MainCollection;