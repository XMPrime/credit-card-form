import React from "react";
import AnimatedChar from "./AnimatedChar";
import cardImg from "../images/24.jpeg";

export default function CreditCardBack({ cardName, cardCVV, cardLogo }) {
  return (
    <div className='back d-flex flex-column align-items-center' key={2}>
      <img className='credit-card__img' src={cardImg} alt='credit card bg' />
      <div className='credit-card__strip'></div>
      <div className='credit-card__label cvv-label'>CVV</div>
      <div className='credit-card__white-box d-flex justify-content-between'>
        <div className='credit-card__signature'>{cardName}</div>
        <div className='credit-card__cvv'>
          {cardCVV === "" ? (
            <div className='char'>{cardLogo === "amex" ? "****" : "***"}</div>
          ) : (
            cardCVV
              .split("")
              .map((char, i) => (
                <AnimatedChar
                  key={i}
                  char={char.toUpperCase()}
                  animateOnMount={true}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}
