import React from "react";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function TimeDisplay({ value, label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker label={label} value={value} />
    </LocalizationProvider>
  );
}
