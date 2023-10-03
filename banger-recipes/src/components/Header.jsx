import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const Header = ({ handleSearchInput }) => {
  const [searchInput, setSearchInput] = useState("");
  const [_, setSearchParams] = useSearchParams();
  const handleClick = () => {
    handleSearchInput(searchInput);
    if (searchInput) {
      setSearchParams({ search: searchInput });
    }
    setSearchInput("");
  };
  return (
    <header className="main_header">
      <div className="text-container">
        <h1 className="header-title">
          Look for <span>BANGER</span> Food
        </h1>
        <p className="header-description">
          Look for oportunities to take your time and pick our delicious, one
          must say, Banger food recippes to make your life even more colorful!
        </p>
        <div className="header-input-container">
          <input
            type="search"
            placeholder="Find a recipe..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="tasty_dish"
          className="main_img"
        />
      </div>
    </header>
  );
};

export default Header;
