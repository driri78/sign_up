import React from "react";

function SignInAlert({ user, isLogin }) {
  const { id, pw } = user;
  const printAlert = () => {
    if (id?.trim().length === 0) {
      return <span>아이디를 입력해주세요</span>;
    } else if (pw?.trim().length === 0) {
      return <span>비밀번호를 입력해주세요</span>;
    } else if (isLogin !== null && !isLogin) {
      return <span>아이디 또는 비밀번호를 확인해주세요.</span>;
    }
    return false;
  };
  return <div className="alert_box">{printAlert()}</div>;
}

export default SignInAlert;
