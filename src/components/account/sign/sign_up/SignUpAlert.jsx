import React from "react";

function SignUpAlert({ data, user }) {
  const { tag_id, ko_name, alert } = data;
  const blankAlert = "필수 정보 입니다.";
  const printAlert = () => {
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
  };
  return <div className="alert_box">{printAlert()}</div>;
}
export default SignUpAlert;
