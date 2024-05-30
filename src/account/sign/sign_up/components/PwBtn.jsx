import React from "react";
import style from "../assets/styles/components/PwBtn.module.css";
function PwBtn({ icon01, icon02, className, pwShow, setPwShow }) {
  return (
    <div className={style[className]}>
      <button
        onClick={(e) => {
          setPwShow(!pwShow);
        }}
      >
        {pwShow ? icon01 : icon02}
      </button>
    </div>
  );
}

export default PwBtn;
