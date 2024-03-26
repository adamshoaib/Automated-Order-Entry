import React from "react";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const today = dayjs();
const todayStartOfTheDay = today.startOf("day");

export default function TimeDisplay() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker defaultValue={todayStartOfTheDay} />
    </LocalizationProvider>
  );
}
