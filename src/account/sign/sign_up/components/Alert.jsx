import React, { Fragment } from "react";

function Alert({ tag_id, ko_name, alert, fcn, user }) {
  const blankAlert = "필수 정보 입니다.";
  const printAlert = () => {
    if (user[tag_id] === undefined || tag_id === "email") return;
    if (!user[tag_id].length) {
      return (
        <div style={{ color: "red", padding: "2px", fontSize: "14px" }}>
          {ko_name}: {blankAlert}
        </div>
      );
    }
    if (!fcn.validation(user[tag_id])) {
      return (
        <div style={{ color: "red", padding: "2px", fontSize: "14px" }}>
          {ko_name}: {alert}
        </div>
      );
    }
    return false;
  };
  return <Fragment>{printAlert()}</Fragment>;
}

export default Alert;
