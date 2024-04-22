import React from "react";
import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div className="headerSearch">
      <div className="searchBar">
        <input type="text" placeholder="検索"></input>
      </div>
      <SearchIcon />
    </div>
  );
}

export default Search;
