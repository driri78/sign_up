import React, { useReducer } from "react";
import {
  InputContainerData01,
  InputContainerData02,
  signUpSubBtnData,
} from "../../../../data/signData";
import SignBox from "../../../../components/account/sign/SignBox";
import SubSignBox from "../../../../components/account/sign/SubSignBox";

const [idValidation, pwValidation] = InputContainerData01.map((item) => {
  return item.fcn.validation;
});
const [nameValidation, addrValidation, phoneValidation] =
  InputContainerData02.map((item) => {
    return item.fcn.validation;
  });
const reducer = (state, action) => {
  switch (action.type) {
    case "id":
      let checked = idValidation(action.payload);
      let dupChecked = checked
        ? InputContainerData01[0].fcn.duplicate(action.payload)
        : false;
      return {
        ...state,
        id: {
          val: action.payload,
          checked,
          dupChecked,
        },
      };
    case "pw":
      return {
        ...state,
        pw: { val: action.payload, checked: pwValidation(action.payload) },
      };
    case "name":
      return {
        ...state,
        name: { val: action.payload, checked: nameValidation(action.payload) },
      };
    case "addr":
      return {
        ...state,
        addr: { val: action.payload, checked: addrValidation(action.payload) },
      };
    case "phone":
      return {
        ...state,
        phone: {
          val: action.payload,
          checked: phoneValidation(action.payload),
        },
      };
    case "email":
      return {
        ...state,
        email: { val: action.payload, checked: true },
      };
    default:
      return state;
  }
};

function SignUp(props) {
  const [user, dispatch] = useReducer(reducer, {});
  const data = [InputContainerData01, InputContainerData02];
  return (
    <SignBox data={data} user={user} dispatch={dispatch} word={"회원가입"}>
      <SubSignBox data={signUpSubBtnData} />
    </SignBox>
  );
}

export default SignUp;
