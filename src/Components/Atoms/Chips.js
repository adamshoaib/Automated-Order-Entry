import * as React from "react";
import Chip from "@mui/material/Chip";

export default function Chips({ label, icon, onClick, backgroundColor = "" }) {
  return (
    <Chip
      icon={icon ? icon : null}
      label={label}
      variant="outlined"
      onClick={onClick}
      sx={{ backgroundColor: backgroundColor }}
    />
  );
}
