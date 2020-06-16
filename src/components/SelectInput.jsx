import React from "react";
import { Row, Col, FormGroup, Label } from "reactstrap";

export default function SelectInput({
  size,
  label,
  name,
  value,
  onChange,
  onFocus,
  maxLength,
}) {
  return (
    <FormGroup>
      <Row>
        <Label for={name} sm={size}>
          {label}
        </Label>
      </Row>
      <Row>{dropdowns}</Row>
    </FormGroup>
  );
}
