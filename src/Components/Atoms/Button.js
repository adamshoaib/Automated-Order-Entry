import React from "react";

export default function Button({ label, onClick }) {
  return (
    <button className="button-root" onClick={onClick}>
      {label}
    </button> 
  );
}
