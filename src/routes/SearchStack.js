import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/PetTypeSelections/DogTypeSelectionScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const SearchStack = () => {
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
        name="SearchScreen"
        component={SearchScreen}
        options={{ title: "Search" }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
