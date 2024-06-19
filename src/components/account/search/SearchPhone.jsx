import React, { Fragment, useReducer } from "react";
import SearchItem from "./SearchItem";
import { searchData01 } from "../../../data/accountData";
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      const name = action.payload;
      return { ...state, name };
    case "phone":
      const phone = action.payload;
      return { ...state, phone };
    default:
      return state;
  }
};
function SearchIdPhone({ word }) {
  const [user, dispatch] = useReducer(reducer, {});

  return (
    <Fragment>
      <SearchItem
        data={searchData01}
        user={user}
        dispatch={dispatch}
        word={word}
      />
    </Fragment>
  );
}

export default SearchIdPhone;
