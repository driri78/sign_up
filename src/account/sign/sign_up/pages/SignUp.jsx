import React, { useReducer, useState } from "react";
import data from "../data/inputConteainerData";
import SignBox from "../frame/SignBox";
import InputContainer from "../frame/InputContainer";
import InputItem from "../frame/InputItem";
import AlertBox from "../frame/AlertBox";
import Label from "../components/Label";
import Input from "../components/Input";
import PwBtn from "../components/PwBtn";
import AddrBtn from "../components/AddrBtn";
import Alert from "../components/Alert";
import SignUpBtn from "../components/SignUpBtn";
import SubMenuBtn from "../components/SubMenuBtn";

const reducer = (state, action) => {
  switch (action.type) {
    case "id":
      let id = action.payload;
      return { ...state, id };
    case "pw":
      let pw = action.payload;
      return { ...state, pw };
    case "name":
      let name = action.payload;
      return { ...state, name };
    case "addr":
      let addr = action.payload;
      return { ...state, addr };
    case "phone":
      let phone = action.payload;
      return { ...state, phone };
    case "email":
      let email = action.payload;
      return { ...state, email };
    default:
      return state;
  }
};

function SignUp(props) {
  const [pwShow, setPwShow] = useState(false);
  const [user, dispatch] = useReducer(reducer, {});
  return (
    <SignBox>
      <InputContainer>
        {data.InputContainer01.map((item, index) => (
          <InputItem
            key={index}
            tag_id={item.tag_id}
            user={user}
            fcn={item.fcn}
          >
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
          {data.InputContainer01.map((item, index) => (
            <Alert
              key={index}
              tag_id={item.tag_id}
              ko_name={item.ko_name}
              alert={item.alert}
              fcn={item.fcn}
              user={user}
            />
          ))}
        </AlertBox>
      </InputContainer>
      <InputContainer>
        {data.InputContainer02.map((item, index) => (
          <InputItem
            key={index}
            tag_id={item.tag_id}
            fcn={item.fcn}
            user={user}
          >
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
          {data.InputContainer02.map((item, index) => (
            <Alert
              key={index}
              tag_id={item.tag_id}
              ko_name={item.ko_name}
              alert={item.alert}
              fcn={item.fcn}
              user={user}
            />
          ))}
        </AlertBox>
      </InputContainer>
      <SignUpBtn
        user={user}
        dispatch={dispatch}
        idPwValidation={data.InputContainer01.map((item) => {
          return item.fcn.validation;
        })}
        userInfoValidation={data.InputContainer02.map((item) => {
          return item.fcn.validation;
        })}
      />
      <SubMenuBtn />
    </SignBox>
  );
}

export default SignUp;
