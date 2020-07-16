import React from "react";
import { Row } from "reactstrap";
import AnimatedChar from "./AnimatedChar";
import chip from "../images/cc-chip.png";
import cardImg from "../images/24.jpeg";

export default function CreditCardFront({
  cardNum,
  cardName,
  cardExpMonth,
  cardExpYear,
  cardLogo,
}) {
  function addHashes(str) {
    const parts = str.split(" ");
    const lastPart = parts[parts.length - 1];

    if (cardLogo === "amex") {
      switch (parts.length) {
        case 1:
          for (let i = lastPart.length; i < 4; i++) {
            parts[0] += "#";
          }
          parts.push("######");
          parts.push("#####");
          break;
        case 2:
          for (let i = lastPart.length; i < 6; i++) {
            parts[1] += "#";
          }
          parts.push("#####");
          break;
        default:
          for (let i = lastPart.length; i < 5; i++) {
            parts[2] += "#";
          }
          break;
      }
    } else {
      for (let i = lastPart.length; i < 4; i++) {
        parts[parts.length - 1] += "#";
      }
      for (let i = parts.length; i < 4; i++) {
        parts.push("####");
      }
    }

    return parts.join(" ").split("");
  }

  const cardNumDisplay = addHashes(cardNum, cardLogo);

  return (
    <div className='front px-0 d-flex flex-column'>
      <img className='credit-card__img' src={cardImg} alt='credit card bg' />
      <img
        className='credit-card__logo'
        src={require(`../images/${cardLogo}.png`)}
        alt='card logo'
      />

      <img className='credit-card__chip' src={chip} alt='chip' />
      <div id='num' className='credit-card__num'>
        {cardNumDisplay.map((char, i) => (
          <AnimatedChar key={i} char={char} animateOnMount={false} />
        ))}
      </div>
      <Row className='justify-content-between'>
        <div id='name' className='card-holder px-0 '>
          <div className='credit-card__label'>CARD HOLDER</div>
          <div className='credit-card__name'>
            {cardName === "" ? (
              <div className='char'>YOUR FULL NAME</div>
            ) : (
              cardName
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

        <div id='exp' className='valid-thru px-0'>
          <div className='credit-card__label'>VALID THRU</div>
          <div className='credit-card__dates'>
            <AnimatedChar char={cardExpMonth} animateOnMount={false} />
            <span className='forward-slash'>/</span>
            <AnimatedChar char={cardExpYear} animateOnMount={false} />
          </div>
        </div>
      </Row>
    </div>
  );
}
