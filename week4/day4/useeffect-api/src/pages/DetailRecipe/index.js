import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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
          <img src={recipe.imageUrl} alt="food" />
          <p>{recipe.preparation_time}</p>

          <h2>Ingredientes!</h2>
          <ul>
            {recipe.ingredients.map((ingrediente) => {
              return <li>{ingrediente}</li>;
            })}
          </ul>

          <h2>Método de Preparo</h2>
          <ul>
            {recipe.preparationMethod.map((metodo) => {
              return <li>{metodo}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
}

export default DetailRecipe;
