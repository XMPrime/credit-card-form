import React from "react";
import { Row, Col } from "reactstrap";
import AnimatedChar from "./AnimatedChar";
import MovingBox from "./MovingBox";
import chip from "../images/cc-chip.png";
import cardImg from "../images/24.jpeg";
import { v4 as uuidv4 } from "uuid";

export default function CreditCardFront({
  cardNum,
  cardName,
  cardExpMonth,
  cardExpYear,
  cardLogo,
  boxStart,
  boxEnd,
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
      <MovingBox boxStart={boxStart} boxEnd={boxEnd} />
      <img className='credit-card__img' src={cardImg} alt='credit card bg' />
      <img
        className='credit-card__logo'
        src={require(`../images/${cardLogo}.png`)}
        alt='card logo'
      />

      <img className='credit-card__chip' src={chip} alt='chip' />
      <div className='credit-card__num'>
        {cardNumDisplay.map((char) => (
          <AnimatedChar key={uuidv4()} char={char} />
        ))}
      </div>
      <Row className='justify-content-between card-holder'>
        <Col sm={8} xs={8} className='px-0 '>
          <div className='credit-card__label'>CARD HOLDER</div>
          <div className='credit-card__name'>
            {cardName === "" ? (
              <AnimatedChar char='YOUR FULL NAME' />
            ) : (
              cardName
                .split("")
                .map((char) => (
                  <AnimatedChar key={uuidv4()} char={char.toUpperCase()} />
                ))
            )}
          </div>
        </Col>

        <Col sm={4} xs={4} className='px-0'>
          <div className='credit-card__label valid-thru'>VALID THRU</div>
          <div className='credit-card__dates valid-thru'>
            <AnimatedChar char={cardExpMonth} />
            /
            <AnimatedChar char={cardExpYear} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
