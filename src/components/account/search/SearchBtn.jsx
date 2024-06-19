import React from "react";
import AccountBtn from "../AccountBtn";
import { useSearch } from "../../../context/account/SearchContext";
function SearchBtn({ data, word, user }) {
  const { how } = useSearch();
  const [id, name, phone, email] = data;
  // console.log(id, name, phone, email);
  const submit = () => {
    if (word === "다음") {
      // 아이디가 있는지 검사
    } else if (word === "비밀번호 찾기") {
    } else if (word === "아이디 찾기") {
    }
    console.log(user);
  };

  return (
    <AccountBtn>
      <button onClick={submit}>{word}</button>
    </AccountBtn>
  );
}

export default SearchBtn;
