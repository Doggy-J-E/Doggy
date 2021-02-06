import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./src/routes/HomeStack";
import ProfileStack from "./src/routes/ProfileStack";

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStack} />
    <Tabs.Screen name="Search" component={ProfileStack} />
  </Tabs.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="About Us" component={ProfileStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
