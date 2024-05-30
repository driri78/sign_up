import React from "react";
import style from "../assets/styles/frame/InputItem.module.css";
import "../assets/styles/frame/InputItem.css";
function InputItem({ children, tag_id, user, fcn }) {
  return (
    <div
      className={style.input_item}
      style={{
        border:
          user[tag_id] === undefined
            ? "1px solid #ddd"
            : !fcn.validation
            ? "1px solid #ddd"
            : fcn.validation(user[tag_id]) || "2px solid red",
      }}
    >
      {children}
    </div>
  );
}

export default InputItem;
