import React from "react";
import SearchPw02 from "../../../../components/account/search/pw/SearchPw02";
import Logo from "../../../../components/all/Logo";

function SearchPwPage(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "50%",
        transform: "translateY(-70%)",
      }}
    >
      <Logo />
      <SearchPw02 />
    </div>
  );
}

export default SearchPwPage;
