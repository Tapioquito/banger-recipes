import axios from "axios";
import { useState, useEffect } from "react";
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
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    try {
      const response = await axios.request(options);

      setRecipes(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return [recipes];
};

export default useFetchRecipes;
