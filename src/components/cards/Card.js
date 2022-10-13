import "./Card.css";

const Card = (props) => {
  const { key, title, desc, image } = props;
  return (
    <div className="card">
      <div className="cardTitle">
        <h2>{title}</h2>
      </div>
      <img src={image} alt={title} />

      <div className="cardDesc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
