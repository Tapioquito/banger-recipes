import { AiOutlineFire } from "react-icons/ai";
import { BiCake, BiCheese } from "react-icons/bi";
import { CiWheat } from "react-icons/ci";
import { IoFish } from "react-icons/io5";

import RecipeNutritionalFacts from "./RecipeNutritionalFacts";

const nutritionalFactsArray = [];
const RecipeHeader = ({ nutritionalFacts, name }) => {
  return (
    <div className="recipe-header">
      <h1>{name}</h1>
      <div className="nutritional-facts-container">
        {nutritionalFactsArray.map(({ Icon, id, amount, category }) => (
          <RecipeNutritionalFacts key={id} fact={{ amount, category }}>
            <Icon />
          </RecipeNutritionalFacts>
        ))}
      </div>
    </div>
  );
};

export default RecipeHeader;
