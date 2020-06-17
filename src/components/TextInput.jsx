import React from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";

export default function TextInput({
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
      <Label for={name} sm={size}>
        {label}
      </Label>
      <Col>
        <Input
          type='text'
          name={name}
          id={name}
          className={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onFocus}
          maxLength={maxLength}
        />
      </Col>
    </FormGroup>
  );
}
