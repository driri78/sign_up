import React, { useReducer } from "react";
import {
  signData01,
  signData02,
  signUpSubBtnData,
} from "../../../../data/accountData";
import SignUpBtn from "./SignUpBtn";
import InputContainer from "../../InputContainer";
import SignUpAlert from "./SignUpAlert";
import SubBtnBox from "../../SubBtnBox";
import "../../../../assets/styles/account/sign/Sign.css";

const [idValidation, pwValidation] = signData01.map((item) => {
  return item.fcn.validation;
});
const [nameValidation, addrValidation, phoneValidation] = signData02.map(
  (item) => {
    return item.fcn.validation;
  }
);
const reducer = (state, action) => {
  switch (action.type) {
    case "id":
      let checked = idValidation(action.payload);
      let dupChecked = checked
        ? signData01[0].fcn.duplicate(action.payload)
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
  const data = [signData01, signData02];
  const data02 = signUpSubBtnData;
  return (
    <div className="sign_box">
      {data.map((InputContainerData, index) => (
        <InputContainer
          key={index}
          data={InputContainerData}
          user={user}
          dispatch={dispatch}
        >
          {InputContainerData.map((InputItemData) => (
            <SignUpAlert
              key={InputItemData.tag_id}
              data={InputItemData}
              user={user}
            />
          ))}

          {index === data.length - 1 && (
            <SignUpBtn user={user} dispatch={dispatch} word={"회원가입"} />
          )}
        </InputContainer>
      ))}
      <SubBtnBox data={data02} user={user} />
    </div>
  );
}

export default SignUp;
