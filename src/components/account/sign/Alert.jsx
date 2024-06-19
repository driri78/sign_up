import React, { Fragment } from "react";

function Alert({ tag_id, ko_name, alert, user, isLogin }) {
  const blankAlert = "필수 정보 입니다.";
  const printAlert = () => {
    if (isLogin === undefined) {
      // sign-up alert처리
      if (user[tag_id]?.val === undefined || tag_id === "email") return;
      if (!user[tag_id]?.val.length) {
        return (
          <span>
            {ko_name}: {blankAlert}
          </span>
        );
      }
      if (!user[tag_id]?.checked) {
        return (
          <span>
            {ko_name}: {alert}
          </span>
        );
      }
      if (tag_id === "id" && !user[tag_id]?.dupChecked) {
        return <span>사용 불가능한 아이디 입니다</span>;
      }
    } else {
      // sign-in alert처리
      if (user.id?.trim().length === 0) {
        return <span>아이디를 입력해주세요</span>;
      } else if (user.pw?.trim().length === 0) {
        return <span>비밀번호를 입력해주세요</span>;
      } else if (isLogin !== null && !isLogin) {
        return <span>아이디 또는 비밀번호를 확인해주세요.</span>;
      }
    }
    return false;
  };
  return <div className="alert_box">{printAlert()}</div>;
}

export default Alert;
