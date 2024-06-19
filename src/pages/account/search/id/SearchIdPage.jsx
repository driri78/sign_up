import React, { Fragment } from "react";
import SearchId from "../../../../components/account/search/id/SearchId";
import Logo from "../../../../components/all/Logo";
function SearchIdPage(props) {
  return (
    <div
      style={{
        position: "relative",
        top: "50%",
        transform: "translateY(-70%)",
      }}
    >
      <Logo />
      <SearchId />
    </div>
  );
}

export default SearchIdPage;
