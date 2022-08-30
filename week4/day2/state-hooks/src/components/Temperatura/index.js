function Temperatura({ graus }) {
  if (graus > 30) {
    return <h1>Está esquentando. Temperatura atual: {graus}</h1>;
  }

  if (graus < 20 && graus > 12) {
    return <h1>Meu deus tá frio. Temperatura atual: {graus}</h1>;
  }

  if (graus < 12) {
    return <h1>karen está morta. Temperatura atual: {graus}</h1>;
  }

  return <h1>Está normal!</h1>;
}

export default Temperatura;
