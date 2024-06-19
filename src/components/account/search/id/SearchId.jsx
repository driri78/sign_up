import React from "react";
import SearchBox from "../SearchBox";
import SubBtnBox from "../../SubBtnBox";
import { searchIdSubBtnData } from "../../../../data/accountData";
function SearchId(props) {
  const word = "아이디 찾기";

  return (
    <div>
      <SearchBox word={word}>
        <SubBtnBox data={searchIdSubBtnData} />
      </SearchBox>
    </div>
  );
}

export default SearchId;
