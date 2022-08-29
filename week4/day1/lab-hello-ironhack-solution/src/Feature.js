import React from "react";

// Componente que representa cada feature do React. Os dados vem todos do componente pai através das props
function Feature(props) {
  return (
    <div className="feature">
      <img alt={props.title} src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Feature;
