import React from "react";
import NavLi from "./NavLi";

function Nav({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <NavLi key={index} item={item} />
      ))}
    </ul>
  );
}

export default Nav;
