import React from "react";
import InputContainer from "../InputContainer";
import SearchBtn from "./SearchBtn";
import "../../../assets/styles/account/search/SearchItem.css";
function SearchItem({ data, user, dispatch, word }) {
  return (
    <div className="search_item">
      <InputContainer data={data} user={user} dispatch={dispatch}>
        <SearchBtn data={data} word={word} user={user} />
      </InputContainer>
    </div>
  );
}

export default SearchItem;
