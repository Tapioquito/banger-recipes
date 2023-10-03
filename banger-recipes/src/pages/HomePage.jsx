import { useEffect } from "react";

import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { useSearchParams } from "react-router-dom";

export default function HomePage() {
  const [fetchRecipes, { data, loading, error }] = useFetchRecipes();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    fetchRecipes(searchParams.get("search"));
  }, []);
  const handleSearchInput = (searchInput) => {
    if (searchInput) {
      fetchRecipes(searchInput);
    }
  };
  return (
    <>
      <Header handleSearchInput={handleSearchInput} />
      {loading && <Loading />}
      {data && <CardList recipes={data} />}
      {error && <p>{error}</p>}
    </>
  );
}
