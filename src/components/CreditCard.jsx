import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import cardImg from "../images/24.jpeg";
import chip from "../images/cc-chip.png";
import useContext from "../useContext";
import logo from "../images/visa.png";
import Character from "./Character";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function CreditCard(props) {
  const { transformCardNum } = useContext();
  const {
    cardNum,
    cardNumArr,
    cardName,
    cardCVV,
    cardExpMonth,
    cardExpYear,
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

  const animatedChars = cardNumArr.map((char) => {
    return (
      <CSSTransition timeout={500} classNames='char'>
        <div className='char'>{char}</div>
      </CSSTransition>
    );
  });

  return (
    <div className='credit-card'>
      <Container className='card-img'>
        <Row className='mb-3 justify-content-end'>
          <img className='card-img-logo ' src={logo} alt='card logo' />
        </Row>
        <Row className='mb-3'>
          <img className='card-img-chip ' src={chip} alt='chip' />
        </Row>
        <Row className='mb-3'>
          <div className='card-img-num ml-4'>
            <TransitionGroup className='d-flex flex-row'>
              {cardNumArr.map((char) => {
                return (
                  <CSSTransition timeout={500} classNames='char'>
                    <div className='char'>{char}</div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
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
