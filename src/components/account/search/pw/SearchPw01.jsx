import React, { useReducer } from "react";
import SearchItem from "../SearchItem";
import { searchData03 } from "../../../../data/accountData";
const reducer = (state, action) => {
  switch (action.type) {
    case "id":
      const id = action.payload;
      return { ...state, id };
    default:
      return state;
  }
};
function SearchPw01(props) {
  const [user, dispatch] = useReducer(reducer, {});
  const word = "다음";
  return (
    <SearchItem
      data={searchData03}
      user={user}
      dispatch={dispatch}
      word={word}
    />
  );
}

export default SearchPw01;
