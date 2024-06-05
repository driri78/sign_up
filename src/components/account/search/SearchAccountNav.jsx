import React from "react";

function SearchAccountNav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/account/search_id">아이디 찾기</Link>
        </li>
        <li>
          <Link to="/account/search_pw">비밀번호 찾기</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SearchAccountNav;
