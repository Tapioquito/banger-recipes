import { Link } from "react-router-dom";
import { NoFoodFound } from "../assets/no-food-found.png";

export default function Error({ message, explanation }) {
  return (
    <div className="not-found-container">
      <img src={NoFoodFound} alt="" className="not-found-image" />
      <h1 className="not-found-header">{message ? message : "oh nooooo!"}</h1>
      <p>{explanation ? explanation : "something went wrong"}</p>
      <Link to="/"> Back to Home</Link>
    </div>
  );
}
