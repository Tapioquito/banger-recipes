import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
  },
  headers: {
    "X-RapidAPI-Key": "70bbd18fffmshdb007f2ad17d4a0p190322jsn9ddb56439968",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};
const useFetchRecipes = () => {
  //its a secret
  const [recipes, setRecipes] = useState(null); //null or {}
  const [loading, setLoading] = useState(false); //false or ture
  const [error, setError] = useState(null); //null or string

  const fetchRecipes = async (searchTerm) => {
    setLoading(true);
    setRecipes(null);
    setError(null);
    try {
      const requestOptions = { ...options };
      if (searchTerm) {
        requestOptions.params.q = searchTerm;
      }
      const response = await axios.request(requestOptions);

      setRecipes(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLoading(false);
    }
  };
  return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;
