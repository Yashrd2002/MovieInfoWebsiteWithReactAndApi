import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="left">Movify</div>
      </Link>
      <Link to="/"><div className='right'>
        <span>All Movies</span>
      </div>
      </Link>
      
    </div>
  );
};

export default Header;
