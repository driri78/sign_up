import React from "react";
import style from "../assets/styles/frame/InputContainer.module.css";
function InputContainer({ children }) {
  return <div className={style.input_container}>{children}</div>;
}

export default InputContainer;
