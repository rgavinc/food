import React, { useState } from "react";
import { Text } from "../components/standard-components";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const onTermSubmit = () => console.log("on term submit");
  return (
    <>
      <SearchBar {...{ term, setTerm, onTermSubmit }} />
      <Text>Search Screen</Text>
    </>
  );
};

export default SearchScreen;
