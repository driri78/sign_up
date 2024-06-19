import React from "react";
import style from "../../../assets/styles/account/search/SearchNav.module.css";
import { useSearch } from "../../../context/account/SearchContext";
function SearchNav({ word }) {
  const { how, setHow } = useSearch();
  return (
    <div className={style.search_menu}>
      <ul>
        <li
          className={how === "phone" ? style.click : ""}
          onClick={(e) => setHow("phone")}
        >
          전화번호로 {word}
        </li>
        <li
          className={how === "email" ? style.click : ""}
          onClick={(e) => setHow("email")}
        >
          이메일로 {word}
        </li>
      </ul>
    </div>
  );
}

export default SearchNav;
