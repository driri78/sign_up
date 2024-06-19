import React from "react";
import style from "../../assets/styles/account/Account.module.css";
function AccountBtn({ children }) {
  return <div className={style.account_btn}>{children}</div>;
}

export default AccountBtn;
