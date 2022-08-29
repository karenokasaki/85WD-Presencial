import React from "react";

function ReactLogo(props) {
  return (
    <img
      alt="semi-transparent React logo"
      src="./images/react-logo.svg"
      style={{
        position: "absolute",
        top: props.top,
        right: props.right,
        transform: `scale(${props.scale})`,
      }}
    />
  );
}

export default ReactLogo;
