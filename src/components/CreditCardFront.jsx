import React from "react";
import { Row, Col } from "reactstrap";
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
    <div className='front px-0 d-flex flex-column' key={1}>
      <img className='credit-card__img' src={cardImg} alt='credit card bg' />
      <img
        className='credit-card__logo mb-3'
        src={require(`../images/${cardLogo}.png`)}
        alt='card logo'
      />

      <img className='credit-card__chip ml-5 mb-3' src={chip} alt='chip' />
      <div className='credit-card__num ml-4 mb-3'>
        {cardNumDisplay.map((char) => (
          <AnimatedChar char={char} />
        ))}
      </div>
      <Row className='justify-content-between mx-4'>
        <Col sm={8} className='px-0 '>
          <div className='credit-card__label'>CARD HOLDER</div>
          <div className='credit-card__name'>
            {cardName === "" ? (
              <AnimatedChar char='YOUR FULL NAME' />
            ) : (
              cardName
                .split("")
                .map((char) => <AnimatedChar char={char.toUpperCase()} />)
            )}
          </div>
        </Col>

        <Col sm={2} className='px-0'>
          <div className='credit-card__label'>VALID THRU</div>
          <div className='credit-card__dates'>
            <AnimatedChar char={cardExpMonth} />
            <span>/</span>
            <AnimatedChar char={cardExpYear} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
