import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import WelcomeStack from "./src/routes/WelcomeStack";
import Loading from "./src/component/Loading";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  let [fontsLoaded] = useFonts({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-italic": require("./assets/fonts/Nunito-Italic.ttf"),
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "ubuntu-italic": require("./assets/fonts/Ubuntu-Italic.ttf"),
    "ubuntu-light": require("./assets/fonts/Ubuntu-Light.ttf"),
    "ubuntu-medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  if (!fontsLoaded) {
    if (isLoading) {
      return <Loading />;
    }
  } else {
    return (
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    );
  }
}
