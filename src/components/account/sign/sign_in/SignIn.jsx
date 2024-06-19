import React, { useReducer, useState } from "react";
import { signData01, signInSubBtnData } from "../../../../data/accountData";
import SignInBtn from "./SignInBtn";
import SignInAlert from "./SignInAlert";
import InputContainer from "../../InputContainer";
import SubBtnBox from "../../SubBtnBox";
import "../../../../assets/styles/account/sign/Sign.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "id":
      return {
        ...state,
        id: action.payload,
      };
    case "pw":
      return {
        ...state,
        pw: action.payload,
      };
    default:
      return state;
  }
};

function SignIn(props) {
  const [user, dispatch] = useReducer(reducer, {});
  const data = signData01; // id, pw
  const data02 = signInSubBtnData;
  const [isLogin, setIsLogin] = useState(null); // {id: false , pw : false}

  return (
    <form className="sign_box" onSubmit={(e) => e.preventDefault()}>
      <InputContainer data={data} user={user} dispatch={dispatch}>
        <SignInAlert user={user} isLogin={isLogin} />
        <SignInBtn
          data={data}
          word={"로그인"}
          user={user}
          dispatch={dispatch}
          setIsLogin={setIsLogin}
        />
      </InputContainer>
      <SubBtnBox data={data02} user={user} />
    </form>
  );
}

export default SignIn;
