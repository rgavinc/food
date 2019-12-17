import React from "react";
import styled from "styled-components";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const FlatList = styled.FlatList``;
const TouchableOpacity = styled.TouchableOpacity``;

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

const ResultsList = ({ title, results, navigation }) => {
  return results && results.length > 0 ? (
    <View>
      <Title>{title}</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        data={results}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
          >
            <ResultsDetail {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  ) : null;
};

export default withNavigation(ResultsList);
