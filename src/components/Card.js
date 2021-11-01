import { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [liked, setLiked] = useState(true);

  const likeHandler = () => {
    setLiked(!liked);
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="card-content">
        <div className="wrapper">
          <div className="date info">{props?.eventDate.substr(0, 2)}</div>
          <button onClick={likeHandler}>
            {!liked ? (
              <i className="fas fa-bookmark"></i>
            ) : (
              <i className="far fa-bookmark"></i>
            )}
          </button>
        </div>
        <p className="name info">{props.eventName}</p>
      </div>
    </div>
  );
};

export default Card;
