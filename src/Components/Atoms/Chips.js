import * as React from "react";
import Chip from "@mui/material/Chip";

export default function Chips({ label, icon }) {
  return <Chip icon={icon ? icon : null} label={label} variant="outlined" />;
}
