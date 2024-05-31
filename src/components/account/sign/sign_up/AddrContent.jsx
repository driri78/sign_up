import React from "react";
import DaumPostcode from "react-daum-postcode";
import style from "../../../../assets/styles/account/sign/sign_up/AddrContent.module.css";
function AddrContent({ setOnAddr, dispatch }) {
  const themeObj = {
    bgColor: "#89e2ff",
  };
  const postStyle = {
    width: "400px",
    height: "470px",
    border: "1px solid #ddd",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    left: "50%",
    top: "50%",
  };
  const onCompletePost = (data) => {
    setOnAddr(false);
    dispatch({ type: "addr", payload: data.address });
  };
  return (
    <div className={style.AddrContentBox_box} onClick={(e) => setOnAddr(false)}>
      <DaumPostcode
        theme={themeObj}
        style={postStyle}
        onComplete={onCompletePost}
      />
    </div>
  );
}

export default AddrContent;
