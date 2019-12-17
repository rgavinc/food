import React, { useState, useEffect } from "react";
import styled from "styled-components";
import yelp from "../api/yelp";

const Text = styled.Text``;
const FlatList = styled.FlatList``;
const Image = styled.Image`
  width: 300px;
  height: 200px;
`;

const ResultsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState();
  const id = navigation.getParam("id");
  const getRestaurant = async id => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };
  useEffect(() => {
    getRestaurant(id);
  }, []);
  console.log({ restaurant });

  return restaurant ? (
    <>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => <Image source={{ uri: item }} />}
      />
    </>
  ) : null;
};

export default ResultsShowScreen;
