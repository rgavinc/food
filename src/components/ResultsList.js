import React from "react";
import styled from "styled-components";
import ResultsDetail from "./ResultsDetail";

const FlatList = styled.FlatList``;

const View = styled.View`
  margin-bottom: 10px;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  margin-bottom: 5px;
`;

const Text = styled.Text``;

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Title>{title}</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        data={results}
        horizontal
        renderItem={({ item }) => <ResultsDetail {...item}></ResultsDetail>}
      />
    </View>
  );
};

export default ResultsList;
