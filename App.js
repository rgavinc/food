import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import styled from "styled-components/native";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const View = styled.View`
  flex: 1;
`;

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
      headerStyle: {}
    }
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => (
  <View>
    <AppContainer />
  </View>
);

export default App;
