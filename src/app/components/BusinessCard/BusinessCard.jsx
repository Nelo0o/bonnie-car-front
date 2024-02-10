/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../BusinessCard/BusinessCard.css";
import Image from "next/image";
import B_img from "../../../../public/assets/b_img.png";

const BusinessCard = () => {
  return (
    <div className="bcard_container">
      <div className="b_img">
        <Image alt="image de moto noire sur fond jaune" src={B_img}></Image>
      </div>
      <div className="txt_container">
        <h1 className="b_title">Notre Entreprise</h1>
        <p className="b_txt">
          Depuis 2016, la start-up <strong>Bonnie&Car</strong> a simplifié et
          sécurisé la vente entre particuliers de plus de 1000 automobiles et
          motos. <br />
          Imaginez pouvoir vendre ou acheter votre véhicule en toute confiance,
          avec la garantie d'une transaction sécurisée et transparente. <br />{" "}
          C'est ce que <strong>Bonnie&Car</strong> vous offre depuis le début,
          et maintenant..
        </p>
        <button className="b_btn">EN SAVOIR PLUS</button>
      </div>
    </div>
  );
};

export default BusinessCard;
