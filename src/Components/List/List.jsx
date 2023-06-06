import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./List.css";

const List = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all#")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="list">
      {movies?.map((item) => {
        return <Card item={item} key={item.show.id} />;
      })}
    </div>
  );
};

export default List;
