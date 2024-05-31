import React from "react";
import SubSignBtn from "./SubSignBtn";
import style from "../../../assets/styles/account/sign/SubSignBox.module.css";
function SubSignBox({ data }) {
  return (
    <div className={style.sub_box}>
      {data.map((item, index) => (
        <SubSignBtn key={index} item={item} />
      ))}
    </div>
  );
}

export default SubSignBox;
