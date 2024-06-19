import React from "react";
import { Link } from "react-router-dom";

function SubBtn({ item }) {
  return <Link to={`${item.link}`}>{item.word}</Link>;
}

export default SubBtn;
