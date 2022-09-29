import "./Cards.css";

const Cards = (props) => {
  const { name, duration, img } = props.fakedata;

  return (
    <div>
      <div className="card-container">
        <img src={img} alt="" />
        <div className="card-details">
          <p>Name: {name}</p>
          <p>Time: {duration} min</p>
        </div>
        <button
          className="btn"
          onClick={() => props.addDurationHandler(duration)}
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Cards;
