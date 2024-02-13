"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import image1 from "../../../../public/assets/slide.png";
import image2 from "../../../../public/assets/slide.png";
import image3 from "../../../../public/assets/slide.png";
import image4 from "../../../../public/assets/slide.png";

export default function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesData = [image1, image2, image3, image4];

  // Vérifie si slides est défini et qu'il s'agit d'un tableau
  const isSlidesValid = Array.isArray(slides) && slides.length > 0;

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Slideshow slides={slidesData} />
      <section className="slider">
        {/* Affiche les flèches uniquement si slides est défini et qu'il contient plus d'une slide */}
        {isSlidesValid && slides.length > 1 && (
          <>
            <Image
              src={slides[0]} // Utilisation de la première image pour la flèche gauche
              alt="previous img"
              className="leftArrow"
              onClick={goToPrevious}
              width={50}
              height={50}
            />
            <Image
              src={slides[1]} // Utilisation de la deuxième image pour la flèche droite
              alt="next img"
              className="rightArrow"
              onClick={goToNext}
              width={50}
              height={50}
            />
          </>
        )}

        {/* Affiche l'image à l'index actuel */}
        {isSlidesValid && (
          <article className="slide" key={slides[currentIndex]}>
            <Image
              src={slides[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={500}
              height={300}
            />
          </article>
        )}

        {/* Affiche le numéro de la slide actuelle et le nombre total de slides */}
        {isSlidesValid && (
          <p className="slideRooms">
            {`${currentIndex + 1}`}/{`${slides.length}`}{" "}
          </p>
        )}
      </section>
    </>
  );
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};
