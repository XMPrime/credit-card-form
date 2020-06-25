import React, { useState } from "react";
import { Col } from "reactstrap";

export default function ExpSelect({
  id,
  defaultOption,
  items,
  onChange,
  onFocus,
}) {
  const [disable, setDisable] = useState(false);

  return (
    <Col xs={6}>
      <select
        className='custom-select'
        name='card-form-exp'
        id={`card-form-exp__${id}`}
        onChange={onChange}
        onFocus={(e) => {
          setDisable(true);
          onFocus(e);
        }}
      >
        <option disabled={disable}>{defaultOption}</option>
        {items}
      </select>
    </Col>
  );
}
