import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function DetailRecipe() {
  const { recipeID } = useParams();

  const [recipe, setRecipe] = useState({
    name: "",
    imageUrl: "",
    preparation_time: "",
    ingredients: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchRecipe() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/recipes/${recipeID}`
      );
      setRecipe(response.data); //isso aqui é o objeto da receita
      setIsLoading(false);
    }
    fetchRecipe();
  }, []);

  console.log(recipe);

  return (
    <>
      {isLoading === false && (
        <>
          <h1>{recipe.name}</h1>
          <img src={recipe.imageUrl} alt="food" width={400} />

          <ListGroup horizontal>
            <ListGroupItem
              color={
                recipe.preparation_time.includes("h") ? "danger" : "warning"
              }
            >
              Tempo de Preparo: {recipe.preparation_time}
            </ListGroupItem>
            <ListGroupItem
              color={
                recipe.level.toLowerCase() === "facil" ? "success" : "warning"
              }
            >
              Dificuldade: {recipe.level}
            </ListGroupItem>
            <ListGroupItem>Porções: {recipe.portions}</ListGroupItem>
          </ListGroup>

          <ListGroup>
            <h2>Ingredientes!</h2>
            {recipe.ingredients.map((ingrediente) => {
              return <ListGroupItem>{ingrediente}</ListGroupItem>;
            })}
          </ListGroup>

          <ListGroup numbered>
            <h2 className="list-group-item">Método de Preparo</h2>
            {recipe.preparationMethod.map((metodo) => {
              return <ListGroupItem>{metodo}</ListGroupItem>;
            })}
          </ListGroup>
        </>
      )}
    </>
  );
}

export default DetailRecipe;
