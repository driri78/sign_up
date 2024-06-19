import React, { Fragment, useReducer } from "react";
import SearchItem from "./SearchItem";
import { searchData02 } from "../../../data/accountData";
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      const name = action.payload;
      return { ...state, name };
    case "email":
      const email = action.payload;
      return { ...state, email };
    default:
      return state;
  }
};
function SearchIdEmail({ word }) {
  const [user, dispatch] = useReducer(reducer, {});
  return (
    <Fragment>
      <SearchItem
        data={searchData02}
        user={user}
        dispatch={dispatch}
        word={word}
      />
    </Fragment>
  );
}

export default SearchIdEmail;
