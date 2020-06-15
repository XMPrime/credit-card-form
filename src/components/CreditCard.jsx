import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import cardImg from "../images/24.jpeg";
import chip from "../images/cc-chip.png";
import useContext from "../useContext";
import logo from "../images/visa.png";
import Character from "./Character";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

export default function CreditCard(props) {
  const { transformCardNum } = useContext();
  const {
    cardNum,
    cardName,
    cardCVV,
    cardExpMonth,
    cardExpYear,
    cardFront,
  } = props;

  // console.log(cardNumArr);

  // function cardNumDisplay(str) {
  //   const display = "#### #### #### ####";
  //   const length = str.length;
  //   if (str !== "") {
  //     return str + display.slice(length);
  //   }
  //   console.log(display.split(""));
  //   return display.split("");
  // }

  // const cardNumArr = cardNumDisplay(transformCardNum(cardNum)).split("");

  const charVariants = {
    initial: {
      opacity: 0,
      y: "-30px",
    },
    animate: {
      opacity: 1,
      y: "0px",
      transition: { duration: 0.25 },
    },
    exit: {
      opacity: 0,
      // transition: { ease: "easeInOut" },
    },
  };

  function addHashes(str) {
    const parts = str.split(" ");
    const lastPart = parts[parts.length - 1];
    // let hashes = [];
    // const maxLength = 19; // 16 numbers + 3 spaces

    for (let i = lastPart.length; i < 4; i++) {
      parts[parts.length - 1] += "#";
    }

    for (let i = parts.length; i < 4; i++) {
      parts.push("####");
    }
    return parts.join(" ").split("");
  }

  const cardNumDisplay = addHashes(cardNum);
  console.log(cardNumDisplay);

  const animatedChars = cardNumDisplay.map((char) => {
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className='char'
          key={char}
          variants={charVariants}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          {char}
        </motion.div>
      </AnimatePresence>
    );
  });

  return (
    <div className='credit-card'>
      <Container className={`card-img ${cardFront ? "front" : "back"}`}>
        <Row className='mb-3 justify-content-end'>
          <img className='card-img-logo ' src={logo} alt='card logo' />
        </Row>
        <Row className='mb-3'>
          <img className='card-img-chip ' src={chip} alt='chip' />
        </Row>
        <Row className='mb-3'>
          <div className='card-img-num ml-4'>
            <div className='d-flex flex-row'>
              {/* {cardNumArr.map((char) => {
                return <motion.div className='char'>{char}</motion.div>;
              })} */}
              {animatedChars}
            </div>
          </div>
        </Row>
        <Row className='justify-content-between'>
          <Col sm={8} className='px-0 ml-4'>
            <div className='card-label'>CARD HOLDER</div>
            <div className='card-img-name'>
              {cardName === "" ? "YOUR FULL NAME" : cardName}
            </div>
          </Col>

          <Col sm={2} className='px-0 mr-4'>
            <div className='card-label'>VALID THRU</div>
            <div className='card-img-exp'>{`${cardExpMonth}/${cardExpYear}`}</div>
          </Col>
        </Row>
        <Row>
          <div className='card-img-cvv'>{cardCVV}</div>
        </Row>
      </Container>
    </div>
  );
}
