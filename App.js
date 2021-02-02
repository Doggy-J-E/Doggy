import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DogSizeSelectionScreen from "./src/screens/DogTypeSelections/DogSizeSelectionScreen";
import DogEnergyLevelSelectionScreen from "./src/screens/DogTypeSelections/DogEnergyLevelSelectionScreen";
import DogColorSelectionScreen from "./src/screens/DogTypeSelections/DogColorSelectionScreen";

export default function App() {
  return (
    // <WelcomeScreen />
    //<HomeScreen />
    // <DogSizeSelectionScreen />
    // <DogEnergyLevelSelectionScreen />
    <DogColorSelectionScreen />
  );
}
