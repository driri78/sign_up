import React from "react";
import style from "../../assets/styles/home/MainNavBox.module.css";
import { mainMenu, loginMenu } from "../../data/homeData";
import Nav from "./Nav";
import Logo from "../all/Logo";

function MainNavBox() {
  return (
    <div className={style.lnb_box}>
      <Logo fontSize={"24px"} />
      <Nav data={mainMenu} />
      <Nav data={loginMenu} />
    </div>
  );
}

export default MainNavBox;
