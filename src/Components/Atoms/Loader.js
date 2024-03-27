import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div>
      <div className="loader-overlay"></div>
      <CircularProgress className="loader-root" />
    </div>
  );
}
