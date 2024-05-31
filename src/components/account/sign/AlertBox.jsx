import React from "react";
import Alert from "./Alert";

function AlertBox({ data, user, isLogin }) {
  return (
    <div className="alert_box">
      {data.map((item, index) => (
        <Alert
          key={index}
          tag_id={item.tag_id}
          ko_name={item.ko_name}
          alert={item.alert}
          user={user}
          isLogin={isLogin}
        />
      ))}
    </div>
  );
}

export default AlertBox;
