import React, { useState, useEffect } from "react";
import { Text } from "../components/standard-components";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    onTermSubmit("food");
  }, []);

  const onTermSubmit = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "south jordan, utah"
        }
      });
      setRestaurants(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <>
      <SearchBar
        {...{ term, setTerm }}
        onTermSubmit={() => onTermSubmit(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>We have found {restaurants.length} results</Text>
    </>
  );
};

export default SearchScreen;
