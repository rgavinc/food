import React from "react";
import styled from "styled-components";

const FlatList = styled.FlatList``;

const View = styled.View``;
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.Text``;

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Title>{title}</Title>
      <FlatList
        keyExtractor={({ id }) => id}
        data={results}
        horizontal
        renderItem={({ item: { name } }) => <Text>{name}</Text>}
      />
    </View>
  );
};

export default ResultsList;
