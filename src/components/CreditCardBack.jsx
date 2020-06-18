import React from "react";
import AnimatedChar from "./AnimatedChar";
import cardImg from "../images/24.jpeg";

export default function CreditCardBack({ cardName, cardCVV, cardFront }) {
  return (
    <div className='back d-flex flex-column align-items-center' key={2}>
      <img className='credit-card__img' src={cardImg} alt='credit card bg' />
      <div className='credit-card__strip'></div>
      <div className='credit-card__label cvv-label mr-4 mt-3'>CVV</div>
      <div className='credit-card__white-box d-flex justify-content-between'>
        <div className='credit-card__signature'>{cardName}</div>
        <div className='credit-card__cvv'>
          {cardCVV.split("").map((char) => (
            <AnimatedChar char={char} />
          ))}
        </div>
      </div>
    </div>
  );
}
