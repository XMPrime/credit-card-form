import React from "react";
import { Container } from "reactstrap";
import CreditCardFront from "./CreditCardFront";
import CreditCardBack from "./CreditCardBack";
import MovingBox from "./MovingBox";

export default function CreditCard({
  cardNum,
  cardName,
  cardCVV,
  cardExpMonth,
  cardExpYear,
  cardFront,
  cardLogo,
  boxStart,
  boxEnd,
}) {
  return (
    <Container className='credit-card px-0 d-flex flex-column justify-content-center'>
      <div id='credit-card' className={`cover${cardFront ? "" : " flip"}`}>
        <MovingBox boxStart={boxStart} boxEnd={boxEnd} />
        <CreditCardFront
          cardNum={cardNum}
          cardName={cardName}
          cardCVV={cardCVV}
          cardLogo={cardLogo}
          cardExpMonth={cardExpMonth}
          cardExpYear={cardExpYear}
        />
        <CreditCardBack
          cardName={cardName}
          cardCVV={cardCVV}
          cardLogo={cardLogo}
        />
      </div>
    </Container>
  );
}
