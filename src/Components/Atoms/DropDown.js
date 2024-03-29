import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown({ options, label, value, handleChange }) {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options?.map((ele, index) => (
            <MenuItem key={index} value={ele.key}>
              {ele.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
