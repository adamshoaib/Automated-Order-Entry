import React from "react";

function Typography({
  variant = "h1",
  customStyle = { margin: 0 },
  children,
  className = "", 
}) {
  if (variant === "h2") {
    return <h2 className={`typography-root ${className}`}>{children}</h2>;
  } else if (variant === "h3") {
    return <h3 className={`typography-root ${className}`}>{children}</h3>;
  } else if (variant === "h4") {
    return <h4 className={`typography-root ${className}`}>{children}</h4>;
  } else if (variant === "h5") {
    return <h5 className={`typography-root ${className}`}>{children}</h5>;
  } else if (variant === "p") {
    return <p className={`typography-root ${className}`}>{children}</p>;
  } else {
    return <h1 className={`typography-root ${className}`}>{children}</h1>;
  }
}

export default Typography;
