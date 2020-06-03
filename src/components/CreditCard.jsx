import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import cardImg from "../images/24.jpeg";
import chip from "../images/cc-chip.png";
import useContext from "../useContext";

export default function CreditCard(props) {
  const { transformCardNum } = useContext();
  const { cardNum, cardName, cardCVV, cardExpMonth, cardExpYear } = props;

  function cardNumDisplay(str) {
    let display = "#### #### #### ####";
    const length = str.length;
    if (str !== "") {
      return str + display.slice(length);
    }
    return display;
  }

  return (
    <div className='credit-card'>
      <Container className='card-img px-5'>
        <Row>
          <Col>
            <img className='card-img-chip' src={chip} alt='chip' />
          </Col>
          <Col>
            <div className='card-img-logo'>testasdgadsgadgsg</div>
          </Col>
        </Row>
        <Row>
          <div className='card-img-num'>
            {cardNumDisplay(transformCardNum(cardNum))}
          </div>
        </Row>
        <Row className='d-flex w-100 justify-content-between'>
          <div className='card-img-name'>{cardName}</div>
          <div className='card-img-exp'>{`${cardExpMonth} / ${cardExpYear}`}</div>
        </Row>
        <Row>
          <div className='card-img-cvv'>{cardCVV}</div>
        </Row>
      </Container>
    </div>
  );
}
