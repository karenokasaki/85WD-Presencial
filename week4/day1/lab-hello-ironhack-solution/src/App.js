import React from "react";
import "./assets/styles/styles.css";

// Importando nossos componentes
import Header from "./Header";
import HeroText from "./HeroText";
import Feature from "./Feature";
import ReactLogo from "./ReactLogo";

// Toda a informação das features em uma array para economizarmos trabalho depois na hora de renderizar o componente de features, podendo fazer um loop
const featuresArray = [
  {
    title: "Declarative",
    image: "./images/icon1.png",
    description: "React makes it painless to create interactive UIs.",
  },
  {
    title: "Components",
    image: "./images/icon2.png",
    description: "Build encalpsulated components that manage their state",
  },
  {
    title: "Single-way",
    image: "./images/icon3.png",
    description: "A set of immutable values are passed to the components",
  },
  {
    title: "JSX",
    image: "./images/icon4.png",
    description: "Statically typed, designed to run on modern browsers",
  },
];

// Componente principal do app
function App() {
  return (
    <div className="background">
      <Header />
      <div className="flex-container">
        <HeroText />
        <ReactLogo top="10%" right="30%" scale="1.3" />
        <ReactLogo top="42%" right="16%" scale="0.9" />
        <ReactLogo top="65%" right="30%" scale="0.9" />
        <ReactLogo top="10%" right="-7%" scale="0.7" />
        <ReactLogo top="38%" right="-7%" scale="0.7" />
        <ReactLogo top="65%" right="-7%" scale="0.7" />
      </div>
      <div className="features-container">
        {/* Para cada elemento da array de features, renderize um componente Feature, passando os dados de cada objeto como props */}
        {featuresArray.map((feature) => (
          <Feature
            key={feature.title}
            title={feature.title}
            image={feature.image}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
