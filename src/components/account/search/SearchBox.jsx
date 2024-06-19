import React from "react";
import SearchNav from "./SearchNav";
import SearchContainer from "./SearchContainer";
import "../../../assets/styles/account/search/SearchBox.css";
import { SearchContextProvider } from "../../../context/account/SearchContext";
function SearchBox({ children, word }) {
  return (
    <div className="search_box">
      <SearchContextProvider>
        <SearchNav word={word} />
        <SearchContainer word={word} />
      </SearchContextProvider>

      {children}
    </div>
  );
}

export default SearchBox;
