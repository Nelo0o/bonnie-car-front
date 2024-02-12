import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHeart,
  faStar,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Slide_img from "../../../../public/assets/slide.png";
import Image from "next/image";
import "../ProductCard/ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product_container">
      <div className="slide">
        <Image src={Slide_img} alt="Images postées par le vendeur" />
      </div>
      <div className="description_container">
        <div className="product_marque">
          <strong>HONDA</strong>
        </div>
        <p className="product_modele">Cbr 1000 rr fireblade</p>
        <p className="product_year">2006</p>
        <p className="product_km">60 500km</p>
        <p className="product_cv">9CV</p>
        <p className="product_carb">ESSENCE</p>
        <p className="product_loc">
          <FontAwesomeIcon icon={faLocationDot} width={30} height={25} />
          Provence Alpes (13)
        </p>
        <p className="product-price">5 200€</p>
        <div className="fav">
          <FontAwesomeIcon icon={faHeart} width={30} height={25} />
          <div className="heart-overlay"></div>
          Mettre en favoris
        </div>
        <div className="product_btns">
          <button className="visite_btn">VISITER</button>
          <button className="reserver_btn">RESERVER</button>
        </div>
        <div className="notes_container">
          <div className="carroserie_note">
            CARROSSERIE
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
          </div>
          <div className="mecanique_note">
            MECANIQUE
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
          </div>
          <div className="suivi_note">
            SUIVI ENTRETIEN
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
            <FontAwesomeIcon icon={faStar} width={30} height={25} />
          </div>
        </div>
        <p className="help_product">
          <FontAwesomeIcon icon={faPhone} width={30} height={25} />
          Besoin de conseils ? Appelez-nous
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
