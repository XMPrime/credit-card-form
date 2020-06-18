import React from "react";
import { Container, Row, Col } from "reactstrap";
import AnimatedChar from "./AnimatedChar";
import chip from "../images/cc-chip.png";
// import logo from "../images/visa.png";
// import visa from "../images/visa.png";
// import mastercard from "../images/mastercard.png";
// import discover from "../images/discover.png";
// import amex from "../images/amex.png";
// import diners from "../images/diners.png";
// import useContext from "../useContext";
import cardImg from "../images/24.jpeg";
// import { Context } from "../Context";

export default function CreditCardFront({
  cardNum,
  cardName,
  cardCVV,
  cardExpMonth,
  cardExpYear,
  cardFront,
  cardLogo,
}) {
  // const {
  //   cardNum,
  //   cardName,
  //   cardCVV,
  //   cardExpMonth,
  //   cardExpYear,
  //   cardFront,
  // } = useContext(Context);

  // const {
  //   cardNum,
  //   cardName,
  //   cardCVV,
  //   cardExpMonth,
  //   cardExpYear,
  //   cardFront,
  // } = useContext();

  function addHashes(str) {
    const parts = str.split(" ");
    const lastPart = parts[parts.length - 1];

    for (let i = lastPart.length; i < 4; i++) {
      parts[parts.length - 1] += "#";
    }

    for (let i = parts.length; i < 4; i++) {
      parts.push("####");
    }
    return parts.join(" ").split("");
  }

  const cardNumDisplay = addHashes(cardNum);
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
          {/* <div className='credit-card__exp d-flex flex-col'> */}
          <div className='credit-card__label'>VALID THRU</div>
          {/* <div className='credit-card__exp'>{`${cardExpMonth}/${cardExpYear}`}</div> */}
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
