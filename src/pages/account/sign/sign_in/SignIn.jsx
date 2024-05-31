import React, { Fragment, useReducer, useState } from "react";
import {
  InputContainerData01,
  signInSubBtnData,
} from "../../../../data/signData";
import SignBox from "../../../../components/account/sign/SignBox";
import SubSignBox from "../../../../components/account/sign/SubSignBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "id":
      return { ...state, id: action.payload };
    case "pw":
      return { ...state, pw: action.payload };
    default:
      return state;
  }
};

function SignIn(props) {
  const [user, dispatch] = useReducer(reducer, {});
  const [isLogin, setIsLogin] = useState(null); // 로그인 상태 저장
  const data = [InputContainerData01];
  return (
    <Fragment>
      <SignBox
        data={data}
        user={user}
        dispatch={dispatch}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        word={"로그인"}
      >
        <SubSignBox data={signInSubBtnData} user={user} />
      </SignBox>
    </Fragment>
  );
}

export default SignIn;
