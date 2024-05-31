import React, { Fragment } from "react";
import Home from "./Home";
import Header from "../../components/all/Header";

function HomePage(props) {
  return (
    <Fragment>
      <Header title={"Home"} />
      <Home />
    </Fragment>
  );
}

export default HomePage;
