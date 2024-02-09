/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef, useState } from "react";
import "../homeFilter/home_filter.css";
import Image from "next/image";
import moto from "../../../../public/assets/moto1_accueil.png";

const VendrePage = () => {
  const vendreRef = useRef(null);
  const acheterRef = useRef(null);
  const vendreFormRef = useRef(null);
  const acheterFormRef = useRef(null);
  const inputRefs = useRef([]);
  // fond gris de l'onglet Vendre
  const [vendreSelected, setVendreSelected] = useState(false);

  const handleVendreClick = () => {
    acheterFormRef.current.style.display = "none";
    vendreFormRef.current.style.display = "block";
    acheterRef.current.style.background = "none";
    vendreRef.current.style.background = "#838383";
    // fond gris de l'onglet Vendre
    setVendreSelected(true);
  };

  const handleAcheterClick = () => {
    acheterFormRef.current.style.display = "block";
    vendreFormRef.current.style.display = "none";
    vendreRef.current.style.background = "none";
    acheterRef.current.style.background = "#3d3d3d";
    // fond gris de l'onglet Vendre
    setVendreSelected(false);
  };

  const handleClearSelect = () => {
    inputRefs.current.forEach((input) => {
      input.value = "";
    });
  };
  // acheter = signup
  return (
    // fond gris de l'onglet Vendre
    <div className={`filter ${vendreSelected ? "vendre-selected" : ""}`}>
      <div className="container">
        <div className="acheter" ref={acheterRef} onClick={handleAcheterClick}>
          Acheter
        </div>
        <div className="vendre" ref={vendreRef} onClick={handleVendreClick}>
          Vendre
        </div>

        <div
          className="acheter-form"
          ref={acheterFormRef}
          style={{ display: "none" }}
        >
          <div className="select_container">
            <select
              id="select-marque"
              // code pour injecter
              ref={(el) => inputRefs.current.push(el)}
            >
              <option value="">Marque</option>
            </select>
            <select id="select-modele" ref={(el) => inputRefs.current.push(el)}>
              <option value="">Modèle</option>
            </select>
            <br />
            <select id="select-prix" ref={(el) => inputRefs.current.push(el)}>
              <option value="">Prix</option>
            </select>
            <select
              id="select-energie"
              ref={(el) => inputRefs.current.push(el)}
            >
              <option value="">Energie</option>
            </select>
            <select id="select-loc">
              <option value="">Localisation</option>
            </select>
          </div>
          <br />
          <div className="btn_annonces" onClick={handleClearSelect}>
            Voir les annonces
          </div>
        </div>

        <div
          className="vendre-form"
          ref={vendreFormRef}
          style={{ display: "none" }}
        >
          <p>
            Avant de vendre votre véhicule, assurez-vous d'obtenir le meilleur
            prix ! Estimez votre voiture dès maintenant pour fixer un tarif
            attractif.
          </p>
          <div className="btn_estimation" onClick={handleClearSelect}>
            Faire une demande d'estimation
          </div>
        </div>
        <div className="moto_1container">
          <Image
            className="moto_1"
            src={moto}
            alt="Image de moto"
            width={180}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default VendrePage;
