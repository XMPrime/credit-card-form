import React, { useState, useEffect } from "react";
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
import { getExpYears, transformCardNum } from "../utils";
import TextInput from "./TextInput";
import { BoxSettings } from "../utils/models";

export default function CreditCardForm() {
  const [cardNum, setCardNum] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("MM");
  const [cardExpYear, setCardExpYear] = useState("YY");
  const [cardFront, setCardFront] = useState(true);
  const [cardLogo, setCardLogo] = useState("visa");
  const [boxStart, setBoxStart] = useState({
    opacity: 0,
    height: "0px",
    width: "0px",
    top: 0,
    left: 0,
  });
  const [boxEnd, setBoxEnd] = useState({
    opacity: 0,
    height: "0px",
    width: "0px",
    top: 0,
    left: 0,
  });
  const [boxSettings, setBoxSettings] = useState();

  useEffect(() => {
    setBoxSettings(calcBoxSettings());
    window.addEventListener("resize", adjustBoxSettings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function adjustBoxSettings() {
    setBoxSettings(calcBoxSettings());
  }

  function domRectConvert(element) {
    const { top, left, width, height } = element.getBoundingClientRect();
    return { top, left, width, height };
  }

  function calcBoxSettings() {
    const heightAdjust = 16;
    const widthAdjust = 20;
    const { top: topOffset, left: leftOffset } = document
      .getElementById("credit-card")
      .getBoundingClientRect();

    const numRect = domRectConvert(document.getElementById("num"));
    const nameRect = domRectConvert(document.getElementById("name"));
    const expRect = domRectConvert(document.getElementById("exp"));

    return {
      num: new BoxSettings({
        ...numRect,
        heightAdjust,
        widthAdjust,
        topOffset,
        leftOffset,
      }),
      name: new BoxSettings({
        ...nameRect,
        heightAdjust,
        widthAdjust,
        topOffset,
        leftOffset,
      }),
      exp: new BoxSettings({
        ...expRect,
        heightAdjust,
        widthAdjust,
        topOffset,
        leftOffset,
      }),
      cvv: {
        opacity: 0,
        height: "0px",
        width: "0px",
        top: 0,
        left: 0,
      },
    };
  }

  function moveBox(e) {
    const name = e.target.name.split("-")[2];
    setBoxStart(boxEnd);
    setBoxEnd(boxSettings[name]);
  }

  function validateUserInput(e) {
    const name = e.target.name;
    const userInput = e.target.value;
    const lastChar = userInput[userInput.length - 1];
    let regex;

    switch (name) {
      case "card-form-num":
        regex = /[0-9 ]/;
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
        boxStart={boxStart}
        boxEnd={boxEnd}
      />
      <Form className='mx-2 mt-1' onSubmit={handleSubmit}>
        <TextInput
          size={12}
          label='Card Number'
          name='card-form-num'
          value={transformCardNum(cardNum, cardLogo)}
          onChange={(e) => {
            validateUserInput(e);
            moveBox(e);
          }}
          onFocus={(e) => {
            setBoxSettings(calcBoxSettings());
            moveBox(e);
          }}
          maxLength={cardLogo === "amex" ? "17" : "19"}
        />
        <TextInput
          size={12}
          label='Card Holder'
          name='card-form-name'
          value={cardName}
          onChange={(e) => {
            validateUserInput(e);
            moveBox(e);
          }}
          onFocus={moveBox}
          maxLength='26'
        />
        <Row>
          <Col sm={8} xs={8}>
            <FormGroup>
              <Label for='card-form-exp'>Expiration Date</Label>
              <Row>
                <ExpSelect
                  id='mm'
                  defaultOption={window.innerWidth >= 600 ? "Month" : "MM"}
                  items={months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                  onChange={(e) => {
                    setCardExpMonth(e.target.value);
                    moveBox(e);
                  }}
                  onFocus={moveBox}
                />
                <ExpSelect
                  id='yy'
                  defaultOption={window.innerWidth >= 600 ? "Year" : "YY"}
                  items={years.map((year) => (
                    <option key={year} value={year.toString().slice(2)}>
                      {year}
                    </option>
                  ))}
                  onChange={(e) => {
                    setCardExpYear(e.target.value);
                    moveBox(e);
                  }}
                  onFocus={moveBox}
                />
              </Row>
            </FormGroup>
          </Col>
          <Col sm={4} xs={4} className='pr-0'>
            <TextInput
              size={6}
              label='CVV'
              name='card-form-cvv'
              value={cardCVV}
              onChange={validateUserInput}
              onFocus={(e) => {
                setCardFront(!cardFront);
                moveBox(e);
              }}
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
