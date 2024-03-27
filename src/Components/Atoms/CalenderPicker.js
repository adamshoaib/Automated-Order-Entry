import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const today = dayjs();
const yesterday = dayjs().subtract(1, "day");

export default function CalenderPicker({ value, label }) {
  const onChange = (value, e) => {
    console.log("Data : ", value, e);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        views={["year", "month", "day"]}
        onChange={onChange}
        className="calender-date-picker"
      />
    </LocalizationProvider>
  );
}
