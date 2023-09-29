import { useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  //const recipe = recipes.find((r) => r.id === parseInt(id));
  // return <h1>{recipe.name}</h1>;
};

export default RecipePage;
