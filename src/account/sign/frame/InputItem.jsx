import React from "react";
import style from "../assets/styles/frame/InputItem.module.css";
import "../assets/styles/frame/InputItem.css";
function InputItem({ children, tag_id, user }) {
  return (
    <div
      className={style.input_item}
      style={{
        border:
          user[tag_id]?.val === undefined
            ? "1px solid #ddd"
            : !user[tag_id]?.checked && "2px solid red",
      }}
    >
      {children}
    </div>
  );
}

export default InputItem;
