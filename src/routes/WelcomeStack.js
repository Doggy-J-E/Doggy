import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import colors from "../config/colors";
import TermsConditionScreen from "../screens/TermsConditionScreen";

const Stack = createStackNavigator();

const WelcomeStack = () => {
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
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ title: "Welcome", headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ title: "DetailsScreen" }}
      />
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
        options={{ title: "Terms and Condition" }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
