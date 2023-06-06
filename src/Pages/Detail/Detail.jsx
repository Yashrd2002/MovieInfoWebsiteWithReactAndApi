import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import Button from "../../Components/Buttons/Button";
import Header from "../../Components/Header/Header";

const Detail = () => {
  const [result, setResult] = useState();
  const { id } = useParams();
  var classn;
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = () => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  };

  if (result?.status === "Running") classn = "active";
  else classn = "nactive";

  return (
    <>
    <Header/>
    <div className="detail">
      
      <div className="left">
        <img src={result?.image.original||"NaN"} alt="img" className="dimg" />
      </div>
      <div className="right">
        <h1>{result?.name||"NaN"}</h1>
        <div className="status">
          <CircleIcon className={classn} />
          {result?.status}
        </div>

        <div className="language">
          <p>Language:</p>
          <span>{result?.language||"NaN"}</span>
          </div>
        <div className="generes">
          <p>Generes: </p>
          {result?.genres.map((item) => {
            return <span >{item||"NaN"}</span>;
          })}
        </div>
        <div className="runtime">
          <p>Runtime</p>
          <span>{result?.runtime||"NaN"} min</span>
        </div>
        <div className="rating">
          <p>Rating</p>
          <span>{result?.rating.average||"NaN"}/10</span>
        </div>
        <div className="summary">
          <p>Summary</p>
          <div>{result?.summary.slice(3, -4)||"NaN"}</div>
        </div>
        <Link to="/">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Detail;
