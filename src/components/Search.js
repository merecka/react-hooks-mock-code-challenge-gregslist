import React, {useState} from "react";

function Search({onSearch}) {
  const [searchText, setSearchText] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchText);
  }

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
