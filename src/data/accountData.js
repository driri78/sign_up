import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { PiAddressBook } from "react-icons/pi";
import { IoLockClosedOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import axios from "axios";

const idValidation = (id) => {
  const isId = /^[0-9a-z_-]{6,12}$/.exec(id);
  if (id === undefined || !isId) {
    return false;
  }
  return true;
};
// 중복검사
let prevId = "";
const idDuplicate = (id) => {
  if (prevId === id) return false;
  console.log("중복검사중.....");
  axios("http://localhost:9090/user/duplicate", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: { id },
  })
    .then((res) => {
      if (res.resultCode === 200) {
        return true;
      }
      return false;
    })
    .catch((err) => console.log);
  prevId = id;
  return false;
};
const pwValidation = (pw) => {
  const isPw =
    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])[^ㄱ-ㅎ^가-힣]{8,25}$/.exec(
      pw
    );
  if (pw === undefined || !isPw) {
    return false;
  }
  return true;
};
const nameValidation = (name) => {
  const isName = /^[가-힣a-zA-Z]{1,}$/.exec(name);
  if (name === undefined || !isName) {
    return false;
  }
  return true;
};
const hyphenCnt = (phone) => {
  return phone.split("-").length - 1;
};
const phoneValidation = (phone) => {
  if (phone === undefined) return false;
  const isPhone01 = /^[0-9]{11}$/.exec(phone.replaceAll("-", ""));
  if (!isPhone01 || phone.substring(0, 3) !== "010" || hyphenCnt(phone) > 2) {
    return false;
  }
  return true;
};
const phoneFormat = (phone) => {
  if (!phoneValidation(phone)) return phone;
  phone = phone.replaceAll("-", "");
  if (phone[3] !== "-") {
    phone = phone.substring(0, 3) + "-" + phone.substring(3, phone.length);
  }
  if (phone[8] !== "-") {
    phone = phone.substring(0, 8) + "-" + phone.substring(8, phone.length);
  }
  return phone;
};
const addrValidation = (addr) => {
  if (addr === undefined || !addr.length) {
    return false;
  }
  return true;
};
export const id = {
  tag_id: "id",
  ko_name: "아이디",
  type: "text",
  icon: <FiUser />,
  fcn: { validation: idValidation, duplicate: idDuplicate },
  alert: "영문(소문자), 숫자 6 ~ 12자리로 작성해주세요.",
};
export const pw = {
  tag_id: "pw",
  classNameInput: "pw_input",
  classNameBtn: "pw_btn",
  ko_name: "비밀번호",
  type: "password",
  icon: <IoLockClosedOutline />,
  icon01: <FaRegEye />,
  icon02: <FaRegEyeSlash color="#999" />,
  fcn: { validation: pwValidation },
  alert: "영문(대소문자), 숫자, 특수문자 한자리이상 8 ~ 25자리로 작성해주세요.",
};
export const name = {
  tag_id: "name",
  ko_name: "이름",
  type: "text",
  icon: <FiUser />,
  fcn: { validation: nameValidation },
  alert: "한글, 영문(대/소문자)로 작성해주세요.",
};
export const addr = {
  tag_id: "addr",
  classNameInput: "addr_input",
  ko_name: "주소",
  type: "address",
  readonly: true,
  icon: <PiAddressBook />,
  fcn: { validation: addrValidation },
};
export const phone = {
  tag_id: "phone",
  ko_name: "휴대전화번호",
  type: "text",
  icon: <IoPhonePortraitOutline />,
  max_length: "13",
  fcn: { validation: phoneValidation, format: phoneFormat },
  alert: "휴대전화번호가 정확한지 확인해주세요.",
};
export const email = {
  tag_id: "email",
  ko_name: "이메일",
  type: "text",
  icon: <MdOutlineEmail />,
  fcn: {},
};
const idLink = { id: 1, link: "/account/search_id", word: "아이디 찾기" };
const pwLink = { id: 2, link: "/account/search_pw", word: "비밀번호 찾기" };
const signInLink = { id: 3, link: "/account/sign-in", word: "로그인" };
const signUpLink = { id: 4, link: "/account/sign-up", word: "회원가입" };

// sign
const signData01 = [id, pw]; // sign_in, sign_up
const signData02 = [name, addr, phone, email]; // sign_up
const signInSubBtnData = [idLink, pwLink, signUpLink]; // sign_in
const signUpSubBtnData = [idLink, pwLink, signInLink]; // sign_up

// search
const searchData01 = [name, phone]; // search_id, search_pw02
const searchData02 = [name, email]; // search_id, search_pw02
const searchData03 = [id]; // search_pw01
const searchIdSubBtnData = [pwLink, signInLink, signUpLink]; // search_id
const searchPwSubBtnData = [idLink, signInLink, signUpLink]; // search_pw02

export {
  signData01,
  signData02,
  signInSubBtnData,
  signUpSubBtnData,
  searchData01,
  searchData02,
  searchData03,
  searchIdSubBtnData,
  searchPwSubBtnData,
};
