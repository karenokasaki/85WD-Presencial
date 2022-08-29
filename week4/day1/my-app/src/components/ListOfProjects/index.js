function ListOfProjects({ array, city }) {
  const num3 = 45;

  return (
    <>
      <h1>Cidade: {city}</h1>
      <p>Animais favoritos:</p>
      <ul>
        {array.map((animal) => {
          return (
            <>
              <li>{animal}</li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default ListOfProjects;
