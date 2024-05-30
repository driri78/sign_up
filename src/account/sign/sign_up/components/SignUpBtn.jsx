import React from "react";
import style from "../assets/styles/components/SignUpBtn.module.css";
function SignUpBtn({ user, dispatch, idPwValidation, userInfoValidation }) {
  const { id, pw, name, addr, phone, email } = user;
  const [idValidation, pwValidation] = idPwValidation;
  const [nameValidation, addrValidation, phoneValidation] = userInfoValidation;
  const initDispatch = () => {
    if (id === undefined) dispatch({ type: "id", payload: "" });
    if (pw === undefined) dispatch({ type: "pw", payload: "" });
    if (name === undefined) dispatch({ type: "name", payload: "" });
    if (addr === undefined) dispatch({ type: "addr", payload: "" });
    if (phone === undefined) dispatch({ type: "phone", payload: "" });
    if (email === undefined) dispatch({ type: "email", payload: "" });
  };
  const submitValidation = () => {
    initDispatch();
    if (!idValidation(id)) return false;
    if (!pwValidation(pw)) return false;
    if (!nameValidation(name)) return false;
    if (!addrValidation(addr)) return false;
    if (!phoneValidation(phone)) return false;
    return true;
  };
  const submit = () => {
    if (submitValidation()) {
      console.log("data send");
    } else {
      console.log("err");
    }
  };
  return (
    <div className={style.signUp_btn}>
      <button onClick={submit}>회원가입</button>
    </div>
  );
}

export default SignUpBtn;
