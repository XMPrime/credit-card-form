import React, { useState } from "react";
import { Col } from "reactstrap";

export default function ExpSelect({ id, defaultOption, items, onChange }) {
  const [disable, setDisable] = useState(false);

  return (
    <Col sm={6}>
      <select
        className='custom-select'
        name='card-exp'
        id={`card-exp__${id}`}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setDisable(true)}
      >
        <option disabled={disable}>{defaultOption}</option>
        {items}
      </select>
    </Col>
  );
}
