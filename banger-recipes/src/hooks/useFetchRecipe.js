import axios from "axios";
import { useReducer } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: { id: "" },
  headers: {
    "X-RapidAPI-Key": "70bbd18fffmshdb007f2ad17d4a0p190322jsn9ddb56439968",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const initialState = {
  data: null,
  loading: false,
  error: false,
};

const Actions = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFULL",
  FETCH_ERROR: "FETCH_ERROR",
};
const recipeReducer = (_, action) => {
  switch (action.type) {
    case Actions.FETCHING_DATA:
      return {
        data: null,
        error: null,
        loading: true,
      };
    case Actions.FETCH_SUCCESSFUL:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case Actions.FETCH_ERROR:
      return {
        data: null,
        error: action.payload,
        loading: false,
      };
    default:
      return initialState;
  }
};
const useFetchRecipe = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    recipeReducer,
    initialState
  );

  const fetchRecipe = async (id) => {
    dispatch({ type: Actions.FETCHING_DATA });
    try {
      const requestOptions = { ...options };

      requestOptions.params.id = id;

      const response = await axios.request(requestOptions);

      dispatch({ type: Actions.FETCH_SUCCESSFUL, payload: response.data });
    } catch (error) {
      dispatch({ type: Actions.FETCH_ERROR, payload: error.message });
    }
  };
  return [fetchRecipe, { data, loading, error }];
};

export default useFetchRecipe;
