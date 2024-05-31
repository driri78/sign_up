import React from "react";
import "../../assets/styles/all/Logo.css";
import { Link } from "react-router-dom";
function Logo({ fontSize }) {
  return (
    <h1 className="logo" style={{ fontSize: fontSize }}>
      <Link to="/">Logo</Link>
    </h1>
  );
}

export default Logo;
