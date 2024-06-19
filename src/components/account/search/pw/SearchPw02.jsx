import React from "react";
import SearchBox from "../SearchBox";
import SubBtnBox from "../../SubBtnBox";
import { searchPwSubBtnData } from "../../../../data/accountData";
function SearchPw02(props) {
  const word = "비밀번호 찾기";
  return (
    <SearchBox word={word}>
      <SubBtnBox data={searchPwSubBtnData} />
    </SearchBox>
  );
}

export default SearchPw02;
