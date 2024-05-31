import React from "react";
import { Link } from "react-router-dom";

function NavLi({ item }) {
  return (
    <li>
      <Link to={`${item.link}`}>{item.word}</Link>
    </li>
  );
}

export default NavLi;
