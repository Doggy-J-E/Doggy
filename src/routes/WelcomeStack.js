import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { scale, moderateScale, verticalScale } from "../config/scaling";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import colors from "../config/colors";

const MyCustomHeader = () => (
  <Image
    source={require("../../assets/doggy_logo_grey.png")}
    style={{
      width: scale(30),
      height: verticalScale(30),
      marginRight: scale(119),
      marginTop: verticalScale(10),
    }}
  />
);

const Stack = createStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.lightOrange,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
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
        options={{
          title: "Doggy",
          headerLeft: null,
          headerRight: MyCustomHeader,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ title: "Doggy Details" }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
