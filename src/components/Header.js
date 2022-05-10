import React from "react";
import Search from "./Search";

function Header({onListingSearch}) {

  function handleSearch(searchText) {
    onListingSearch(searchText);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleSearch} />
    </header>
  );
}

export default Header;
