import React from "react";
import "./FundingBanner.scss";
import Image from "next/image";
import Button from "@/app/components/Button/Button";

const FundingBanner = () => {
  return (
     <div className="funding_container wrapper">
       <Image src="assets/images/funding-image.png" alt="Bannière jaune et blanche" width={500} height={500} loading="lazy" priority={false}/>
       <div className="tirelire_img">
         <Image src="assets/images/tirelire.png" alt="Tirelire en forme de cochon" width={500} height={500} loading="lazy" priority={false}/>
       </div>
       <div className="funding_txt">
         <p>Financer l’achat de mon véhicule à partir de 78€/mois</p>
         <Button buttonText={"Faire la simulation"}/>
       </div>
     </div>
  );
};

export default FundingBanner;