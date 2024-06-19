import React from "react";
import SearchPhone from "./SearchPhone";
import SearchEmail from "./SearchEmail";
import { useSearch } from "../../../context/account/SearchContext";
function SearchContainer({ children, word }) {
  const { how } = useSearch();
  return (
    <div className="search_container">
      {how === "phone" && <SearchPhone word={word} />}
      {how === "email" && <SearchEmail word={word} />}
      {children}
    </div>
  );
}

export default SearchContainer;
