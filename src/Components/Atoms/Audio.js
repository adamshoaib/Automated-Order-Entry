import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export default function Audio() {
  return (
    <div className="audio-root">
      <PlayArrowIcon />
      <Box sx={{ width: 300, marginLeft: 2 }}>
        <Slider size="small" aria-label="Small" value={0} />
      </Box>
    </div>
  );
}
