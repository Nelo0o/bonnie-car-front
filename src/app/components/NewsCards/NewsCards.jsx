import React from "react";
import Image from "next/image";
import "../NewsCards/NewsCards.css";
import Kawasaki1 from "../../../../public/assets/Kawasaki1.png";

const NewsCards = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="image-wrapper">
          <div className="image-container">
            <Image
              src={Kawasaki1}
              className="moto_img"
              alt="Kawasaki1"
              width={300}
              height={200}
            />
          </div>
        </div>
        <div className="price_label">998€</div>
        <h3>
          <strong>Kawasaki</strong> <br />
          Ninja H2
        </h3>
        <div className="card_text">
          <p className="cc">998cc</p>
          <p className="km">825km</p>
          <p className="annee">2018</p>
        </div>
        <div className="etoilesprix">
          <i className="fas fa-star" style={{ color: "#0065FC" }}></i>
          <i className="fas fa-star" style={{ color: "#0065FC" }}></i>
          <i className="fas fa-star" style={{ color: "#0065FC" }}></i>
          <i className="fas fa-star" style={{ color: "#0065FC" }}></i>
          <i className="fas fa-star" style={{ color: "#F2F2F2" }}></i>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
