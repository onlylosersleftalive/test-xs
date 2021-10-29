import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="wrapper">
          <div className="date info">12</div>
          <button>
            <i className="far fa-bookmark" />
          </button>
        </div>
        <p className="name info">Name of event</p>
      </div>
    </div>
  );
};

export default Card;
