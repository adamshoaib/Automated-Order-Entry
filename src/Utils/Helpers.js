import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import SmsIcon from "@mui/icons-material/Sms";
import ScreenshotIcon from "@mui/icons-material/Screenshot";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ImageIcon from "@mui/icons-material/Image";

export const trimContent = (str, maxLetters = 40) => {
  if (str.length <= maxLetters) {
    return str;
  }
  const trimmedString = str.slice(0, maxLetters) + "...";
  return trimmedString;
};

export const getIconForType = (type) => {
  if (type === "Email") {
    return <MailIcon className="type-icon" />;
  } else if (type === "SMS") {
    return <SmsIcon className="type-icon" />;
  } else if (type === "Image") {
    return <ImageIcon className="type-icon" />;
  } else if (type === "Audio") {
    return <AudiotrackIcon className="type-icon" />;
  } else if (type === "ScreenShot") {
    return <ScreenshotIcon className="type-icon" />;
  }
};

export const isValidJSON = (data) => {
  try {
    JSON.parse(data);
    return true;
  } catch (e) {
    if (e instanceof SyntaxError) {
      return false;
    }
  }
  return false;
};

export const getStatusBackgroundColor = (type) => {
  if (type === "Check Required") {
    return "#d1b82a";
  } else if (type === "Delivered") {
    return "green";
  } else if (type === "In Transit") {
    return "yellow";
  } else if (type === "Created") {
    return "orange";
  } else if (type === "Failed" || type === "Need Action") {
    return "red";
  }
};

export const getStatusColor = (type) => {
  if (type === "Check Required") {
    return "warning";
  } else if (type === "Delivered") {
    return "success";
  } else if (type === "In Transit") {
    return "primary";
  } else if (type === "Created") {
    return "primary";
  } else if (type === "Failed") {
    return "danger";
  }
};
