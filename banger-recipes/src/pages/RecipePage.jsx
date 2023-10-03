import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import RecipeHeader from "../components/RecipeHeader";
import useFetchRecipe from "../hooks/useFetchRecipe";
import RecipeInfo from "../components/RecipeInfo";
import Error from "../components/Error";

const RecipePage = () => {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();
  useEffect(() => {
    fetchRecipe(id);
  }, []);
  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;
  if (data?.error) return <Error explanation="Recipe not found" />;
  return (
    <div>
      {data && (
        <>
          <RecipeHeader nutritionalFacts={data.nutrition} name={data.name} />
          <RecipeInfo
            ingredients={data.sections[0].components}
            instructions={data.instructions}
            image={data.thumbnail_url}
          />
        </>
      )}
    </div>
  );
};

export default RecipePage;
