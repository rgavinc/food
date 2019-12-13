import React from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const View = styled.View`
margin-top: 10px
  background-color: #f0eeee;
  height: 50px;
  margin-horizontal: 30px;
  flex-direction: row;
  border-radius: 10px;
`;

const Icon = styled(Feather)`
  font-size: 35px;
  align-self: center;
  margin-horizontal: 15px;
`;

const TextInput = styled.TextInput`
  flex: 1;
  font-size: 18px;
`;

const SearchBar = ({ term, setTerm, onTermSubmit, placeholder = "Search" }) => {
  return (
    <View>
      <Icon name="search" />
      <TextInput
        {...{ placeholder }}
        autoCapitalize="none"
        value={term}
        onChangeText={setTerm}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

export default SearchBar;
