import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import CreditCard from "./CreditCard";
import ExpSelect from "./ExpSelect";
// import { Context } from "../Context";
import { getExpYears, transformCardNum } from "../utils";
import TextInput from "./TextInput";

export default function CreditCardForm(props) {
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("MM");
  const [cardExpYear, setCardExpYear] = useState("YY");
  const [cardFront, setCardFront] = useState(true);

  function validateUserInput(e) {
    const name = e.target.name;
    const userInput = e.target.value;
    const lastChar = userInput[userInput.length - 1];

    let regex;

    switch (name) {
      case "card-form-num":
        regex = /[0-9 ]/;
        if (regex.test(lastChar) || lastChar === undefined) {
          setCardNum(transformCardNum(userInput));
        }
        break;
      case "card-form-name":
        regex = /[a-zA-Z ]/;
        if (regex.test(lastChar) || lastChar === undefined) {
          setCardName(e.target.value.toUpperCase());
        }
        break;
      case "card-form-cvv":
        regex = /[0-9]/;
        if (regex.test(lastChar) || lastChar === undefined) {
          setCardCVV(e.target.value);
        }
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const years = getExpYears(new Date().getFullYear());

  return (
    <Container className='cc-form pb-4 px-4'>
      <CreditCard
        cardNum={cardNum}
        cardName={cardName}
        cardCVV={cardCVV}
        cardExpMonth={cardExpMonth}
        cardExpYear={cardExpYear}
        cardFront={cardFront}
      />
      <Form onSubmit={handleSubmit}>
        <Row>
          <TextInput
            size={12}
            label='Card Number'
            name='card-form-num'
            value={transformCardNum(cardNum)}
            onChange={validateUserInput}
            maxLength='19'
          />
        </Row>
        <Row>
          <TextInput
            size={12}
            label='Card Holder'
            name='card-form-name'
            value={cardName}
            onChange={validateUserInput}
            maxLength='26'
          />
        </Row>
        <Row>
          <Col sm={8}>
            <FormGroup>
              <Row>
                <Label for='card-form-exp' sm={6}>
                  Expiration Date
                </Label>
              </Row>
              <Row>
                <ExpSelect
                  id='mm'
                  defaultOption='Month'
                  items={months.map((month) => (
                    <option value={month}>{month}</option>
                  ))}
                  onChange={setCardExpMonth}
                />
                <ExpSelect
                  id='yy'
                  defaultOption='Year'
                  items={years.map((year) => (
                    <option value={year.toString().slice(2)}>{year}</option>
                  ))}
                  onChange={setCardExpYear}
                />
              </Row>
            </FormGroup>
          </Col>
          <Col sm={4} className='pr-0'>
            <TextInput
              size={6}
              label='CVV'
              name='card-form-cvv'
              value={cardCVV}
              onChange={validateUserInput}
              onFocus={() => setCardFront(!cardFront)}
              maxlength='4'
            />
          </Col>
        </Row>
        <Button
          className='btn-wide mt-3'
          type='submit'
          color='primary'
          size='lg'
          active
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
