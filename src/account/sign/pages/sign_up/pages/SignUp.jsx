import React, { useReducer, useState } from "react";
import data from "../data/signUpData";
import SignBox from "../../../frame/SignBox";
import InputContainer from "../../../frame/InputContainer";
import InputItem from "../../../frame/InputItem";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import PwBtn from "../../../components/PwBtn";
import SubMenuBtn from "../../../components/SubMenuBtn";
import AlertBox from "../frame/AlertBox";
import AddrBtn from "../components/AddrBtn";
import Alert from "../components/Alert";
import SignUpBtn from "../components/SignUpBtn";

const { signUpData01, signUpData02 } = data;

const [idValidation, pwValidation] = signUpData01.map((item) => {
  return item.fcn.validation;
});
const [nameValidation, addrValidation, phoneValidation] = signUpData02.map(
  (item) => {
    return item.fcn.validation;
  }
);
const reducer = (state, action) => {
  switch (action.type) {
    case "id":
      return {
        ...state,
        id: { val: action.payload, checked: idValidation(action.payload) },
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
  const [pwShow, setPwShow] = useState(false);
  const [user, dispatch] = useReducer(reducer, {});
  console.log(user);
  return (
    <SignBox>
      <InputContainer>
        {signUpData01.map((item, index) => (
          <InputItem key={index} tag_id={item.tag_id} user={user}>
            <Label tag_id={item.tag_id}>{item.icon}</Label>
            <Input
              tag_id={item.tag_id}
              type={
                item.tag_id === "pw"
                  ? pwShow
                    ? "text"
                    : "password"
                  : item.type
              }
              ko_name={item.ko_name}
              fcn={item.fcn}
              user={user}
              dispatch={dispatch}
            />
            {item.tag_id === "pw" && (
              <PwBtn
                icon01={item.icon01}
                icon02={item.icon02}
                className={item.classNameBtn}
                pwShow={pwShow}
                setPwShow={setPwShow}
              ></PwBtn>
            )}
          </InputItem>
        ))}
        <AlertBox>
          {signUpData01.map((item, index) => (
            <Alert
              key={index}
              tag_id={item.tag_id}
              ko_name={item.ko_name}
              alert={item.alert}
              user={user}
            />
          ))}
        </AlertBox>
      </InputContainer>
      <InputContainer>
        {signUpData02.map((item, index) => (
          <InputItem key={index} tag_id={item.tag_id} user={user}>
            <Label tag_id={item.tag_id}>{item.icon}</Label>
            <Input
              tag_id={item.tag_id}
              type={item.type}
              ko_name={item.ko_name}
              max_length={item.max_length}
              readonly={item.readonly}
              fcn={item.fcn}
              user={user}
              dispatch={dispatch}
            />
            {item.tag_id === "addr" && <AddrBtn dispatch={dispatch} />}
          </InputItem>
        ))}
        <AlertBox>
          {signUpData02.map((item, index) => (
            <Alert
              key={index}
              tag_id={item.tag_id}
              ko_name={item.ko_name}
              alert={item.alert}
              user={user}
            />
          ))}
        </AlertBox>
      </InputContainer>
      <SignUpBtn user={user} dispatch={dispatch} />
      <SubMenuBtn />
    </SignBox>
  );
}

export default SignUp;
