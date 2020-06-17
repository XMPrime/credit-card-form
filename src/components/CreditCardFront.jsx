import React from "react";
import { Container, Row, Col } from "reactstrap";
import AnimatedChar from "./AnimatedChar";
import chip from "../images/cc-chip.png";
import logo from "../images/visa.png";
import useContext from "../useContext";
// import { Context } from "../Context";

export default function CreditCardFront({
  cardNum,
  cardName,
  cardCVV,
  cardExpMonth,
  cardExpYear,
  cardFront,
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
    <div className='front px-0' key={1}>
      <Row className='mb-3 justify-content-end'>
        <img className='credit-card__logo ' src={logo} alt='card logo' />
      </Row>
      <Row className='mb-3'>
        <img className='credit-card__chip ml-5' src={chip} alt='chip' />
      </Row>
      <Row className='mb-3'>
        <div className='credit-card__num ml-4'>
          {cardNumDisplay.map((char) => (
            <AnimatedChar char={char} />
          ))}
        </div>
      </Row>
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

        <Col sm={1.5} className='px-0'>
          {/* <div className='credit-card__exp d-flex flex-col'> */}
          <div className='credit-card__label'>VALID THRU</div>
          {/* <div className='credit-card__exp'>{`${cardExpMonth}/${cardExpYear}`}</div> */}
          <div className='credit-card__dates'>
            <AnimatedChar char={cardExpMonth} />
            <span>/</span>
            <AnimatedChar char={cardExpYear} />
          </div>
          {/* </div> */}
        </Col>
      </Row>
      <Row>
        <div className='credit-card__cvv'>
          {cardCVV.split("").map((char) => (
            <AnimatedChar char={char} />
          ))}
        </div>
      </Row>
    </div>
  );
}
