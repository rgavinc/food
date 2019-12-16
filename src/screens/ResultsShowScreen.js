import React, { useState } from "react";
import useRestaurants from "../hooks/useRestaurants";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import ResultsList from "../components/ResultsList";

const ScrollView = styled.ScrollView``;
const Text = styled.Text``;

const ResultsShowScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterResultsByPrice = price =>
    restaurants.filter(result => result.price === price);

  return (
    <>
      <Text>Results Show</Text>
    </>
  );
};

export default ResultsShowScreen;
