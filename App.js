import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tab from "./src/routes/TabsNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
}
