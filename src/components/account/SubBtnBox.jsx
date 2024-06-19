import React from "react";
import style from "../../assets/styles/account/SubBtnBox.module.css";
import SubBtn from "./SubBtn";
function SubBtnBox({ data }) {
  return (
    <div className={style.sub_box}>
      {data.map((item) => (
        <SubBtn key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SubBtnBox;
