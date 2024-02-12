import React from "react";
import "../FundingBanner/FundingBanner.css";
import Image from "next/image";
import TirelireImg from "../../../../public/assets/funding_tirelire.png";
import BannerImg from "../../../../public/assets/funding_banner.png";

const FundingBanner = () => {
  return (
    <div className="funding_container">
      <Image src={BannerImg} alt="Bannière jaune et blanche" />
      <div className="tirelire_img">
        <Image src={TirelireImg} alt="Tirelire en forme de cochon" />
      </div>
      <div className="funding_txt">
        <p>Financer l’achat de mon véhicule à partir de 78€/mois</p>
        <button className="funding_btn">Faire la simulation</button>
      </div>
    </div>
  );
};

export default FundingBanner;
