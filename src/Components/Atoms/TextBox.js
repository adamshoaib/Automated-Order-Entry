import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextBox({
  type = "string",
  variant = "outlined",
  label,
  id,
  onChange,
  value,
  disabled = false,
  InputProps = {},
  placeholder = "",
  className = "",
}) {
  return (
    <TextField
      className={`text-field-root ${className}`}
      type={type}
      id={id}
      value={value}
      label={label}
      variant={variant}
      onChange={onChange}
      disabled={disabled}
      size="small"
      placeholder={placeholder}
      InputProps={InputProps}
    />
  );
}
