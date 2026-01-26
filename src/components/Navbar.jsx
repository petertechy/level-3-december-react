import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3"> 
      <div>
        <h1 className={style.heading}>Navbar</h1>
      </div>

      <ul className="d-flex gap-4 align-items-center">
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/effect"><li>Effect</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
