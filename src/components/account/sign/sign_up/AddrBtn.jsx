import React, { useState } from "react";
import style from "../../../../assets/styles/account/sign/sign_up/AddrBtn.module.css";
import AddrContent from "./AddrContent";
function AddrBtn({ dispatch }) {
  const [onAddr, setOnAddr] = useState(false);

  return (
    <div className={style.addr_btn}>
      {onAddr && <AddrContent setOnAddr={setOnAddr} dispatch={dispatch} />}
      <button type="button" onClick={(e) => setOnAddr(true)}>
        주소찾기
      </button>
    </div>
  );
}

export default AddrBtn;
