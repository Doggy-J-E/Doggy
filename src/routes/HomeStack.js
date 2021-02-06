import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export default HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Button
            onPress={() => navigation.toggleDrawer()}
            title="Info"
            color="black"
          />
        ),
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "About Us" }}
      />
    </Stack.Navigator>
  );
};
