import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

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
      <Label for={name}>{label}</Label>
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
    </FormGroup>
  );
}
