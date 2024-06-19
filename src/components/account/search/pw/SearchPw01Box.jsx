import React from "react";
import SearchPw01 from "./SearchPw01";
import SubBtnBox from "../../SubBtnBox";
import { searchPwSubBtnData } from "../../../../data/accountData";
function SearchPw01Box() {
  const style = {
    width: "550px",
    margin: "0 auto",
  };
  return (
    <div style={style}>
      <SearchPw01 />
      <SubBtnBox data={searchPwSubBtnData} />
    </div>
  );
}

export default SearchPw01Box;
