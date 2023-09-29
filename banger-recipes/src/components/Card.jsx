import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  const { id, name, thumbnail_url, topics, total_time_minutes } = recipe;
  const navigate = useNavigate();
  const navigateToRecipePage = () => {
    navigate(`/recipe/${id}`);
  };
  return (
    <div className="card" onClick={navigateToRecipePage}>
      <img src={thumbnail_url} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            {topics.lenght > 0 ? <p>{topics[0]}.name</p> : null}
          </div>
          {total_time_minutes && (
            <p className="time-text">{total_time_minutes} mins</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
