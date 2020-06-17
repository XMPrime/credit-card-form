import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import cardImg from "../images/24.jpeg";
import chip from "../images/cc-chip.png";
import useContext from "../useContext";
import logo from "../images/visa.png";
import AnimatedChar from "./AnimatedChar";
import { v4 as uuidv4 } from "uuid";
import FlipY from "./FlipY";
import CreditCardFront from "./CreditCardFront";
import CreditCardBack from "./CreditCardBack";

export default function CreditCard({
  cardNum,
  cardNumArr,
  cardName,
  cardCVV,
  cardExpMonth,
  cardExpYear,
  cardFront,
}) {
  // const { cardFront } = useContext();

  // function addHashes(str) {
  //   const parts = str.split(" ");
  //   const lastPart = parts[parts.length - 1];

  //   for (let i = lastPart.length; i < 4; i++) {
  //     parts[parts.length - 1] += "#";
  //   }

  //   for (let i = parts.length; i < 4; i++) {
  //     parts.push("####");
  //   }
  //   return parts.join(" ").split("");
  // }

  // const cardNumDisplay = addHashes(cardNum);

  return (
    <Container className='credit-card px-0'>
      <div className='cover'>
        <CreditCardFront
          cardNum={cardNum}
          cardName={cardName}
          cardCVV={cardCVV}
          cardExpMonth={cardExpMonth}
          cardExpYear={cardExpYear}
        />
        <CreditCardBack cardName={cardName} cardCVV={cardCVV} />
      </div>
    </Container>
  );
}

{
  /* <CreditCardFront /> */
}
{
  /* <FlipY id={1}>
{cardFront ? (
  <CreditCardFront
    cardNum={cardNum}
    cardName={cardName}
    cardCVV={cardCVV}
    cardExpMonth={cardExpMonth}
    cardExpYear={cardExpYear}
    cardFront={cardFront}
  />
) : (
  <CreditCardBack />
)}
</FlipY> */
}
