import React from "react";
import style from "../assets/styles/frame/SignBox.module.css";
function SignBox({ children }) {
  return <div className={style.sign_box}>{children}</div>;
}

export default SignBox;
