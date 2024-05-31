import React from "react";
import "../../../assets/styles/account/sign/SignBox.css";
import InputContainer from "./InputContainer";
import AlertBox from "./AlertBox";
import SignBtn from "./SignBtn";
function SignBox({
  children,
  data,
  user,
  dispatch,
  isLogin,
  setIsLogin,
  word,
}) {
  return (
    <div className="sign_box">
      {data.map((InputContainerData, index) => (
        <InputContainer
          key={index}
          data={InputContainerData}
          user={user}
          dispatch={dispatch}
        >
          <AlertBox
            data={isLogin === undefined ? InputContainerData : [0]}
            user={user}
            isLogin={isLogin}
          />
          {index === data.length - 1 && (
            <SignBtn
              user={user}
              dispatch={dispatch}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              word={word}
            />
          )}
        </InputContainer>
      ))}
      {children}
    </div>
  );
}

export default SignBox;
