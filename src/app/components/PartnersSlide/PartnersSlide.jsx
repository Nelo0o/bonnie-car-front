import React from 'react';
import Image from 'next/image';
import './PartnersSlide.scss';

const images = [
  'assets/images/argus.png',
  'assets/images/autotech.png',
  'assets/images/bfmtv.png',
  'assets/images/decisionatelier.png',
  'assets/images/eplaque.png',
  'assets/images/fr-pare-brise.png',
  'assets/images/histovec.png',
  'assets/images/journalauto.png',
  'assets/images/labecanerie.png',
  'assets/images/leparking.png',
  'assets/images/lerepaire.png',
  'assets/images/parisien.png',
  'assets/images/verifiance.png',
  'assets/images/vivocaz.png',
];

const Slide = ({src, alt}) => (
   <div className="slide">
     <Image className="slide__img" src={src} alt={alt} width={250} height={250}/>
   </div>
);

const PartnersSlide = () => (
   <div className="slider">
     <div className="slide-track">
       {images.map((image, index) => <Slide key={index} src={`/${image}`} alt={`partner-${index}`}/>)}
     </div>
   </div>
);

export default PartnersSlide;