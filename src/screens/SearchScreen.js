import React, { useState } from "react";
import useRestaurants from "../hooks/useRestaurants";
import { Text } from "../components/standard-components";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import ResultsList from "../components/ResultsList";

const ScrollView = styled.ScrollView``;

const SearchScreen = props => {
  console.log({ props });
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterResultsByPrice = price =>
    restaurants.filter(result => result.price === price);

  return (
    <>
      <SearchBar
        {...{ term, setTerm }}
        placeholder="pasta"
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title={"Cost Effective"}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title={"Moderate Price"}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title={"Big Spender"}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
