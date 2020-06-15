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
import CreditCard from "./CreditCard";
import ExpSelect from "./ExpSelect";
import useContext from "../useContext";

import chip from "../images/cc-chip.png";

export default function CreditCardForm(props) {
  // const [cardNum, setCardNum] = useState("");
  // const [cardName, setCardName] = useState("");
  // const [cardCVV, setCardCVV] = useState("");
  const {
    cardNum,
    cardNumArr,
    cardName,
    cardCVV,
    cardExpMonth,
    cardExpYear,
    cardFront,
    flipCard,
    setCardExpMonth,
    setCardExpYear,
    getExpYears,
    transformCardNum,
    validateUserInput,
    handleSubmit,
  } = useContext();

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
  ].map((month) => <option value={month}>{month}</option>);
  const currentYear = new Date().getFullYear();
  const years = getExpYears(currentYear).map((year) => (
    <option value={year.toString().slice(2)}>{year}</option>
  ));

  const dropdowns = [
    {
      id: "mm",
      labelText: "Month",
      items: months,
    },
    {
      id: "yy",
      labelText: "Year",
      items: years,
    },
  ].map((dropdown) => (
    <ExpSelect
      id={dropdown.id}
      labelText={dropdown.labelText}
      items={dropdown.items}
      setCardExpMonth={setCardExpMonth}
      setCardExpYear={setCardExpYear}
    />
  ));

  return (
    <Container className='cc-form pb-4 px-4'>
      <CreditCard
        cardNum={cardNum}
        cardNumArr={cardNumArr}
        cardName={cardName}
        cardCVV={cardCVV}
        cardExpMonth={cardExpMonth}
        cardExpYear={cardExpYear}
        cardFront={cardFront}
      />
      <Form onSubmit={handleSubmit}>
        <Row>
          <FormGroup>
            <Label for='card-form-num' sm={12}>
              Card Number
            </Label>
            <Col>
              <Input
                type='text'
                name='card-form-num'
                id='card-form-num'
                value={transformCardNum(cardNum)}
                onChange={validateUserInput}
              />
            </Col>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
            <Label for='card-form-name' sm={12}>
              Card Holder's Name
            </Label>
            <Col sm={12}>
              <Input
                type='text'
                name='card-form-name'
                id='card-form-name'
                value={cardName}
                onChange={validateUserInput}
              />
            </Col>
          </FormGroup>
        </Row>

        <Row>
          <Col sm={8}>
            <FormGroup>
              <Row>
                <Label for='card-form-exp' sm={6}>
                  Expiration Date
                </Label>
              </Row>
              <Row>{dropdowns}</Row>
            </FormGroup>
          </Col>
          <Col sm={4} className='pr-0'>
            <FormGroup sm={6}>
              <Label for='card-form-cvv' sm={3}>
                CVV
              </Label>
              <Col sm={12}>
                <Input
                  type='card-form-cvv'
                  name='card-form-cvv'
                  id='card-form-cvv'
                  value={cardCVV}
                  onChange={validateUserInput}
                  onFocus={flipCard}
                />
              </Col>
            </FormGroup>
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

    // <div className='container'>
    //   <form className='cc-form'>
    //     <label for='card-form-number'>Card Number</label>
    //     <input className='cc-input form-control' type='text' id='card-form-number' />
    //     <label for='card-form-holder'>Card Holder's Name</label>
    //     <input className='cc-input form-control' type='text' id='card-form-holder' />
    //     <div className='row'>
    //       <label for='exp-date'>Expiration Date</label>
    //       <div className='dropdown'>
    //         <button
    //           class='btn btn-secondary dropdown-toggle'
    //           type='button'
    //           id='dropdownMenuButton'
    //           data-toggle='dropdown'
    //           aria-haspopup='true'
    //           aria-expanded='false'
    //         >
    //           Dropdown button
    //         </button>
    //       </div>
    //       <input className='cc-input form-control' type='text' id='exp-date' />
    //     </div>
    //   </form>
    // </div>
    //     <Container>
    //     <form className='cc-form'>
    //       <label for='card-form-number'>Card Number</label>
    //       <input className='cc-input form-control' type='text' id='card-form-number' />
    //       <label for='card-form-holder'>Card Holder's Name</label>
    //       <input className='cc-input form-control' type='text' id='card-form-holder' />

    //       <Row>
    //         <Col>
    //           <label for='exp-date'>Expiration Date</label>
    //           <Row>
    //             <DropdownButton id='exp-date' title='Dropdown button'>
    //               <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
    //               <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
    //               <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
    //             </DropdownButton>
    //             <DropdownButton id='exp-date' title='Dropdown button'>
    //               <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
    //               <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
    //               <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
    //             </DropdownButton>
    //           </Row>
    //         </Col>
    //         <Col>
    //           <label for='cvv'>CVV</label>
    //           <input className='cc-input form-control' type='text' id='cvv' />
    //         </Col>
    //       </Row>
    //     </form>
    //     <Form>
    //       <Form.Group controlId='card-form-number'>
    //         <Form.Label>Card Number</Form.Label>
    //         <Form.Control type='text'></Form.Control>
    //       </Form.Group>
    //       <Form.Group controlId='card-form-holder'>
    //         <Form.Label>Card Holder's Name</Form.Label>
    //         <Form.Control type='text'></Form.Control>
    //       </Form.Group>
    //       <Form.Group as={Col} controlId='exp-date'>
    //         <Form.Label>Expiration Date</Form.Label>
    //         <Form.Row>
    //           <DropdownButton id='exp-date' title='Dropdown button'>
    //             <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
    //             <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
    //             <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
    //           </DropdownButton>
    //           <DropdownButton id='exp-date' title='Dropdown button'>
    //             <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
    //             <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
    //             <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
    //           </DropdownButton>
    //           <Form.Group controlId='card-form-holder'>
    //             <Form.Label>Card Holder's Name</Form.Label>
    //             <Form.Control type='text'></Form.Control>
    //           </Form.Group>
    //         </Form.Row>
    //       </Form.Group>
    //     </Form>
    //   </Container>
  );
}
