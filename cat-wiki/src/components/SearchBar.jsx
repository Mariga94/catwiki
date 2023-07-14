import { useState } from "react";
import styled from "styled-components";
// import debounce from "lodash.debounce";
// import fetchDOGAPI from "../api/api";
function SearchBar() {
  const [query, setQuery] = useState("");

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Form>
      <Input
        id="query"
        type="text"
        placeholder="Enter your breed"
        value={query}
        onChange={changeHandler}
      />
    </Form>
  );
}

export default SearchBar;

// styled components
const Form = styled.form``;
const Input = styled.input`
  width: 24rem;
  height: 4rem;
  border-radius: 3.6rem;
  color: #291507;
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  Line height:21.94px;
  padding: 1.49rem 1.79rem;
`;
