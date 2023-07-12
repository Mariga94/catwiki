import { useState } from "react";
// import debounce from "lodash.debounce";
// import fetchDOGAPI from "../api/api";
function SearchBar() {
  const [query, setQuery] = useState("");

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form action="" className="search-bar">
      <input
        id="query"
        type="text"
        placeholder="Enter your breed"
        value={query}
        onChange={changeHandler}
      />
    </form>
  );
}

export default SearchBar;
