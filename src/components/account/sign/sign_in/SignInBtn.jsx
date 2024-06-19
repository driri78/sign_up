import React, { useRef } from "react";
import AccountBtn from "../../AccountBtn";
import axios from "axios";

function SignInBtn({ data, word, user, setIsLogin }) {
  const [id, pw] = data;
  const idRef = useRef();
  const pwRef = useRef();
  const validationFocus = (validation, ref) => {
    if (!validation()) {
      setIsLogin(false);
      console.log("로그인 실패");
      ref.current.focus();
      return false;
    }
    return true;
  };
  const signInSubmit = () => {
    console.log("id: ", user.id);
    console.log("pw: ", user.pw);
    if (!validationFocus(id.fcn.validation(), idRef)) {
      return;
    } else if (!validationFocus(pw.fcn.validation(), pwRef)) {
      return;
    }

    axios
      .post("http://localhost:9090/user/sign-in", {
        headers: {
          "Content-Type": "application/json",
        },
        data: { id, pw },
      })
      .then((res) => {
        if (res.resultCode === 200) {
          setIsLogin(true);
          console.log("로그인 성공");
          window.location.href = "http://www.localhost:3000";
        }
        setIsLogin(false);
        console.log("로그인 실패");
      })
      .catch((err) => console.log);
  };
  return (
    <AccountBtn>
      <button
        type="submit"
        onClick={(e) => {
          signInSubmit();
        }}
      >
        {word}
      </button>
    </AccountBtn>
  );
}

export default SignInBtn;
