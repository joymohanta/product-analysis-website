import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="menu">
      <Link className="nav-link" to={"/home"}>
        Home
      </Link>
      <Link className="nav-link" to={"/reviews"}>
        Reviews
      </Link>
      <Link className="nav-link" to={"/dashboard"}>
        Dashboard
      </Link>
      <Link className="nav-link" to={"/blogs"}>
        Blogs
      </Link>
      <Link className="nav-link" to={"/about"}>
        About
      </Link>
    </div>
  );
};

export default Navbar;
