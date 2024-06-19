import React from "react";
import Logo from "../../../../components/all/Logo";
import SearchPw01Box from "../../../../components/account/search/pw/SearchPw01Box";

function SearchPwPage01(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "50%",
        transform: "translateY(-70%)",
      }}
    >
      <Logo />
      <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
        찾을 비밀번호의 아이디를 입력해주세요
      </h3>
      <SearchPw01Box />
    </div>
  );
}

export default SearchPwPage01;
