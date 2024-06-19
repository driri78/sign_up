import React, { useState } from "react";
import InputItem from "./InputItem";
import PwBtn from "./sign/PwBtn";
import AddrBtn from "./sign/sign_up/AddrBtn";
import "../../assets/styles/account/InputContainer.css";
function InputContainer({ children, data, user, dispatch }) {
  const [pwShow, setPwShow] = useState(false);
  return (
    <div className="input_container">
      {data.map((item, index) => (
        <InputItem
          key={index}
          item={item}
          user={user}
          dispatch={dispatch}
          pwShow={pwShow}
        >
          {/* 비밀번호 보기 버튼 */}
          {item.tag_id === "pw" && (
            <PwBtn
              icon01={item.icon01}
              icon02={item.icon02}
              className={item.classNameBtn}
              pwShow={pwShow}
              setPwShow={setPwShow}
            />
          )}
          {/* 주소찾기 버튼 */}
          {item.tag_id === "addr" && <AddrBtn dispatch={dispatch} />}
        </InputItem>
      ))}
      {children}
    </div>
  );
}

export default InputContainer;
