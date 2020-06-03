import React, { useEffect } from "react";
import { Col } from "reactstrap";
import useContext from "../useContext";

export default function ExpSelect(props) {
  const { id, labelText, items, setCardExpMonth, setCardExpYear } = props;
  // const { setCardExpMonth, setCardExpYear } = useContext();

  function expChange(e) {
    const { id, value } = e.target;
    console.log(id, value);
    id === "card-exp__mm" ? setCardExpMonth(value) : setCardExpYear(value);
  }

  return (
    <Col sm={6}>
      <select
        className='custom-select'
        name='card-exp'
        id={`card-exp__${id}`}
        onChange={expChange}
      >
        <option>{labelText}</option>
        {items}
      </select>
    </Col>
  );
}
