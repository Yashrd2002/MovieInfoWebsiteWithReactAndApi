import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ item }) => {
  return (
    <Link className="link" to={`/movie/${item.show.id}`}>
      <div className="card">
        <div className="image">
          <img
            src={item?.show.image?.medium}
            alt=""
            className="fimg"
          />
        </div>
        <h2>{item.show.name}</h2>
        <div className="rating">
          <h3>Rating : {item?.show.rating.average || "NaN"}/10</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
