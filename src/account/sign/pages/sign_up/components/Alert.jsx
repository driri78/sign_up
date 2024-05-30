import React, { Fragment } from "react";

function Alert({ tag_id, ko_name, alert, user }) {
  const blankAlert = "필수 정보 입니다.";
  const printAlert = () => {
    if (user[tag_id]?.val === undefined || tag_id === "email") return;
    if (!user[tag_id]?.val.length) {
      return (
        <div style={{ color: "red", padding: "2px", fontSize: "14px" }}>
          {ko_name}: {blankAlert}
        </div>
      );
    }
    if (!user[tag_id]?.checked) {
      return (
        <div style={{ color: "red", padding: "2px", fontSize: "14px" }}>
          {ko_name}: {alert?.one}
        </div>
      );
    }
    return false;
  };
  return <Fragment>{printAlert()}</Fragment>;
}

export default Alert;
