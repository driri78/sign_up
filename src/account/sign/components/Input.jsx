import React, { Fragment, useState } from "react";
import style from "../assets/styles/components/Input.module.css";
function Input({
  type,
  tag_id,
  ko_name,
  max_length,
  readonly,
  dispatch,
  fcn,
  user,
}) {
  const { addr } = user;
  const [value, setValue] = useState("");
  return (
    <Fragment>
      <input
        type={type}
        id={style[tag_id]}
        placeholder={ko_name}
        maxLength={max_length}
        readOnly={readonly}
        onFocus={(e) => {
          if (tag_id === "addr") return; // 주소 input red 테두리 x
          e.target.parentElement.classList.add("focus");
        }}
        onBlur={(e) => {
          if (tag_id === "addr") return; // 주소 input red 테두리 x
          dispatch({ type: tag_id, payload: value });
          e.target.parentElement.classList.remove("focus");
          if (tag_id === "phone") {
            // 폰 input 하이픈 포멧
            setValue(fcn.phoneFrmt(value));
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        value={(tag_id === "addr" ? addr?.val : value) || ""} // 다음 api complete시 value값 넣기
      />
    </Fragment>
  );
}

export default Input;
