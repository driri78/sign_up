import axios from "axios";
import React from "react";
import { InputContainerData01 } from "../../../data/signData";
function SignBtn({ user, dispatch, word, isLogin, setIsLogin }) {
  const { id, pw, name, addr, phone, email } = user;
  const [idValidation, pwValidation] = InputContainerData01.map((item) => {
    return item.fcn.validation;
  });
  const initDispatch = () => {
    if (name === undefined) dispatch({ type: "name", payload: "" });
    if (addr === undefined) dispatch({ type: "addr", payload: "" });
    if (phone === undefined) dispatch({ type: "phone", payload: "" });
    if (email === undefined) dispatch({ type: "email", payload: "" });
    if (id === undefined) dispatch({ type: "id", payload: "" });
    if (pw === undefined) dispatch({ type: "pw", payload: "" });
  };
  const submitValidation = () => {
    initDispatch();
    if (!id?.dupChecked) return false; // id.dupChecked true이면 id.Checked는 무조건 true
    if (!pw?.checked) return false;
    if (!name?.checked) return false;
    if (!addr?.checked) return false;
    if (!phone?.checked) return false;
    return true;
  };

  const signUpSubmit = () => {
    if (submitValidation()) {
      axios
        .post("http://localhost:9090/user/sign-up", {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            id: id.val,
            pw: pw.val,
            name: name.val,
            addr: addr.val,
            phone: phone.val,
            email: email.val,
          },
        })
        .then((res) => {
          if (res.resultCode === 200) {
            console.log("회원가입 성공");
            window.location.href = "http://www.localhost:3000/account/sign-in";
          }
          console.log("회원가입 실패");
        })
        .catch((err) => console.log);
    } else {
      console.log("회원가입 실패");
    }
    console.log("id: ", id?.val);
    console.log("pw: ", pw?.val);
    console.log("name: ", name?.val);
    console.log("addr: ", addr?.val);
    console.log("phone: ", phone?.val);
    console.log("email: ", email?.val);
    console.log(user);
  };

  const signInSubmit = () => {
    console.log("id: ", id);
    console.log("pw: ", pw);
    if (!idValidation(id) || !pwValidation(pw)) {
      setIsLogin(false);
      console.log("로그인 실패");
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
    <div className="sign_btn">
      <button onClick={isLogin === undefined ? signUpSubmit : signInSubmit}>
        {word}
      </button>
    </div>
  );
}

export default SignBtn;
