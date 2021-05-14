import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AuthContext } from "./src/config/context";

import WelcomeStack from "./src/routes/WelcomeStack";
import HomeStack from "./src/routes/HomeStack";
import Loading from "./src/screens/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
    };
  }, []);

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
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken ? <HomeStack /> : <WelcomeStack />}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
}
