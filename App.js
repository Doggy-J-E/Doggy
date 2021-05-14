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
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
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
