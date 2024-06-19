import React from "react";
function PwBtn({ icon01, icon02, className, pwShow, setPwShow }) {
  return (
    <div className={className}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setPwShow(!pwShow);
        }}
      >
        {pwShow ? icon01 : icon02}
      </button>
    </div>
  );
}

export default PwBtn;
