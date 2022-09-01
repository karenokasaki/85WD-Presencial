import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Api() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    console.log("dentro do useEffect, fora da função fetchRecipes");
    async function fetchRecipes() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/recipes"
      );
      setRecipes(response.data);
      console.log("dentro do fetch");
    }

    fetchRecipes();
  }, []);
  // [] => não depende de ninguém, roda quando o componente é renderizado
  // [state] => quando esse state for atualizado, tudo que está dentro do useEffect vai rodar novamente.

  console.log("esscopo do componente", recipes);

  return (
    <>
      <div className="cards">
        {recipes.map((cE) => {
          return (
            <Card
              key={cE._id}
              style={{
                width: "18rem",
              }}
            >
              <img src={cE.imageUrl} alt="food" height={150} />
              <CardBody>
                <CardTitle tag="h5">{cE.name}</CardTitle>
                <CardText>Tempo de preparo: {cE.preparation_time}</CardText>
              </CardBody>
              <div className="buttons">
                <Button color="success" onClick={() => {}}>
                  Favoritar
                </Button>
                <Button color="danger" onClick={() => {}}>
                  Deletar
                </Button>
                <Link to={`/recipe/${cE._id}`}>
                  <Button outline>Detalhes</Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Api;
