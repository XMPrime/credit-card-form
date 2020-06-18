import React from "react";
import { Container } from "reactstrap";
import CreditCardFront from "./CreditCardFront";
import CreditCardBack from "./CreditCardBack";

export default function CreditCard({
  cardNum,
  cardName,
  cardCVV,
  cardExpMonth,
  cardExpYear,
  cardFront,
  cardLogo,
}) {
  return (
    <Container className='credit-card px-0'>
      <div className={`cover ${cardFront || "flip"}`}>
        <CreditCardFront
          cardNum={cardNum}
          cardName={cardName}
          cardCVV={cardCVV}
          cardLogo={cardLogo}
          cardExpMonth={cardExpMonth}
          cardExpYear={cardExpYear}
        />
        <CreditCardBack cardName={cardName} cardCVV={cardCVV} />
      </div>
    </Container>
  );
}
