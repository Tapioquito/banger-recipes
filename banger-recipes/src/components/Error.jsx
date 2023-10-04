import { Link } from "react-router-dom";

export default function Error({ message, explanation }) {
  return (
    <div className="not-found-container">
      <img
        src="https://github.com/harblaith7/The-Modern-React-Udemy-Course/blob/main/04-recipe/src/assets/no-food-found.png?raw=true"
        alt=""
        className="not-found-image"
      />
      <h1 className="not-found-header">{message ? message : "oh nooooo!"}</h1>
      <p>{explanation ? explanation : "something went wrong"}</p>
      <Link to="/"> Back to Home</Link>
    </div>
  );
}
