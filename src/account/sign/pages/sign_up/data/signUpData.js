import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { PiAddressBook } from "react-icons/pi";
import { IoLockClosedOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const idValidation = (id) => {
  const isId = /^[0-9a-z_-]{6,12}$/.exec(id);
  if (id === undefined || !isId) {
    return false;
  }
  return true;
};
const idDuplicate = (id) => {
  // 중복검사
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
const signUpData01 = [
  {
    tag_id: "id",
    ko_name: "아이디",
    type: "text",
    icon: <FiUser />,
    fcn: { validation: idValidation, duplicate: idDuplicate },
    alert: {
      one: "영문(소문자), 숫자 6 ~ 12자리로 작성해주세요.",
      two: "사용할 수 없는 아이디 입니다.",
    },
  },
  {
    tag_id: "pw",
    classNameBtn: "pw_btn",
    ko_name: "비밀번호",
    type: "password",
    icon: <IoLockClosedOutline />,
    icon01: <FaRegEye />,
    icon02: <FaRegEyeSlash color="#999" />,
    fcn: { validation: pwValidation },
    alert:
      "영문(대소문자), 숫자, 특수문자 한자리이상 8 ~ 25자리로 작성해주세요.",
  },
];
const signUpData02 = [
  {
    tag_id: "name",
    ko_name: "이름",
    type: "text",
    icon: <FiUser />,
    fcn: { validation: nameValidation },
    alert: "한글, 영문(대/소문자)로 작성해주세요.",
  },
  {
    tag_id: "addr",
    ko_name: "주소",
    type: "address",
    readonly: true,
    icon: <PiAddressBook />,
    fcn: { validation: addrValidation },
  },
  {
    tag_id: "phone",
    ko_name: "휴대전화번호",
    type: "text",
    icon: <IoPhonePortraitOutline />,
    max_length: "13",
    fcn: { validation: phoneValidation, phoneFrmt: phoneFormat },
    alert: "휴대전화번호가 정확한지 확인해주세요.",
  },
  {
    tag_id: "email",
    ko_name: "(선택)이메일",
    type: "text",
    icon: <MdOutlineEmail />,
    fcn: {},
  },
];

export default { signUpData01, signUpData02 };
