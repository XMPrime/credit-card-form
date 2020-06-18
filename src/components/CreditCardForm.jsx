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
  const [cardLogo, setCardLogo] = useState("visa");

  const cardIdentifiers = {
    visa: "4",
    masterCard: "5",
    discoverCard: "6",
    americanExpress: ["34", "37"],
    dinersClub: ["30", "36", "38"],
  };

  function validateUserInput(e) {
    const name = e.target.name;
    const userInput = e.target.value;
    const lastChar = userInput[userInput.length - 1];
    let regex;

    switch (name) {
      case "card-form-num":
        regex = /[0-9 ]/;
        console.log(userInput[0], cardNum[0]);
        if (userInput[0] !== cardNum[0] || userInput[1] !== cardNum[1]) {
          if (userInput[0] === "4") setCardLogo("visa");
          else if (userInput[0] === "5") setCardLogo("master");
          else if (userInput[0] === "6") setCardLogo("discover");
          else if (
            userInput[0] + userInput[1] === "34" ||
            userInput[0] + userInput[1] === "37"
          )
            setCardLogo("amex");
          else if (
            userInput[0] + userInput[1] === "30" ||
            userInput[0] + userInput[1] === "36" ||
            userInput[0] + userInput[1] === "38"
          )
            setCardLogo("diners");
          else setCardLogo("visa");
        }
        if (regex.test(lastChar) || lastChar === undefined) {
          setCardNum(transformCardNum(userInput, cardLogo));
        }
        break;
      case "card-form-name":
        regex = /[a-zA-Z ]/;
        if (regex.test(lastChar) || lastChar === undefined) {
          setCardName(e.target.value);
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
  console.log(cardLogo);

  return (
    <Container className='cc-form pb-4 px-4'>
      <CreditCard
        cardNum={cardNum}
        cardName={cardName}
        cardCVV={cardCVV}
        cardExpMonth={cardExpMonth}
        cardExpYear={cardExpYear}
        cardFront={cardFront}
        cardLogo={cardLogo}
      />
      <Form className='mx-2 mt-5' onSubmit={handleSubmit}>
        <TextInput
          size={12}
          label='Card Number'
          name='card-form-num'
          value={transformCardNum(cardNum, cardLogo)}
          onChange={validateUserInput}
          maxLength={cardLogo === "amex" ? "17" : "19"}
        />
        <TextInput
          size={12}
          label='Card Holder'
          name='card-form-name'
          value={cardName}
          onChange={validateUserInput}
          maxLength='26'
        />
        <Row>
          <Col sm={8}>
            <FormGroup>
              <Label for='card-form-exp'>Expiration Date</Label>
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
              maxLength={cardLogo === "amex" ? "4" : "3"}
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
