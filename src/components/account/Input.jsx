import React, { Fragment, useState } from "react";
function Input({
  tag_id,
  className,
  type,
  ko_name,
  max_length = 25,
  readonly = false,
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
        id={tag_id}
        className={className}
        placeholder={ko_name}
        maxLength={max_length}
        readOnly={readonly}
        onFocus={(e) => {
          if (tag_id === "addr") return; // 주소 input red 테두리 x
          e.target.parentElement.classList.add("focus");
        }}
        onBlur={(e) => {
          if (tag_id === "addr") return; // 주소 input red 테두리 x
          e.target.parentElement.classList.remove("focus");
          dispatch({ type: tag_id, payload: value });
          if (tag_id === "phone") {
            // 폰 input 하이픈 포멧
            setValue(fcn.format(value));
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        value={(tag_id === "addr" ? addr?.val : value) || ""} // 다음 api complete시 value값 넣기
      />
    </Fragment>
  );
}

export default Input;
