import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchResultScreen from "../screens/SearchResultScreen";

const Stack = createStackNavigator();

export default SearchResultStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.lightOrange,
        },
        headerTintColor: colors.white,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{ title: "Search Result" }}
      />
    </Stack.Navigator>
  );
};

export default SearchResultStack;
