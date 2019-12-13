import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    searchApi("pasta");
  }, []);

  const searchApi = async searchTerm => {
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

  return [searchApi, restaurants, errorMessage];
};
