import React from "react";
import Label from "./Label";
import Input from "./Input";
function InputItem({ children, user, item, dispatch, pwShow }) {
  return (
    <div
      className="input_item"
      style={{
        border:
          user[item.tag_id]?.val === undefined
            ? "1px solid #ddd"
            : user[item.tag_id]?.checked
            ? user[item.tag_id]?.dupChecked !== undefined &&
              !user[item.tag_id]?.dupChecked &&
              "2px solid red"
            : "2px solid red",
      }}
    >
      <Label tag_id={item.tag_id}>{item.icon}</Label>
      <Input
        tag_id={item.tag_id}
        className={item.classNameInput}
        type={item.tag_id === "pw" ? (pwShow ? "text" : "password") : item.type}
        ko_name={item.ko_name}
        max_length={item.max_length}
        readonly={item.readonly}
        fcn={item.fcn}
        user={user}
        dispatch={dispatch}
      />
      {children}
    </div>
  );
}

export default InputItem;
