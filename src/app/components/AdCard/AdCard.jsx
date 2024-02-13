import React from 'react';
import './AdCard.scss';
import Image from 'next/image';

const AdTitle = ({title}) => <h3 className="ad-card__wrapper__content__title">{title}</h3>;

const AdPrice = ({price}) => <span className="ad-card__wrapper__content__price">{price}</span>;

const AdModel = ({model}) => <span className="ad-card__wrapper__content__model">{model}</span>;

const AdSpec = ({cc, km, year}) => (
   <div className="ad-card__wrapper__content__specific">
     <span className="ad-card__wrapper__content__specific__cc">{cc}</span>
     <span className="ad-card__wrapper__content__specific__kilometers">{km}</span>
     <span className="ad-card__wrapper__content__specific__year">{year}</span>
   </div>
);

const Star = ({filled = false}) => {
  const src = filled ? '/assets/icons/star-rate.svg' : '/assets/icons/empty-star-rate.svg';
  
  return (
     <Image src={src} alt="star" width={18} height={18}/>
  )
};
const Rating = ({label, value}) => (
   <p>
     {label}
     <span>
      {[...Array(5)].map((e, i) => <Star key={i} filled={i < value}/>)}
    </span>
   </p>
);

const AdCard = ({src, alt, price, title, model, cc, km, year, ratings}) => {
  return (
     <article className="ad-card">
       <div className="ad-card__wrapper">
         <div className="ad-card__wrapper__img-container">
           <Image src={src} alt={alt} width={500} height={500}/>
         </div>
         <div className="ad-card__wrapper__content">
           <AdPrice price={`${price} €`}/>
           <AdTitle title={title}/>
           <AdModel model={model}/>
           <AdSpec cc={cc} km={km} year={year}/>
           <div className="ad-card__wrapper__content__rating">
             <div className="ad-card__wrapper__content__rating__container">
               {ratings.map((rating, i) =>
                  <Rating key={i} label={rating.label} value={rating.value} />
               )}
             </div>
           </div>
         </div>
       </div>
     </article>
  );
};

export default AdCard;