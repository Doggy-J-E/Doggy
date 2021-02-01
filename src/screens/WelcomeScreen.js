import React from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background-image.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <Text>Welcome to the Doggy App</Text>
        <Text>Register to see cute dogs</Text>
      </View>
      
      <View style={styles.loginButton}>
          <Button title="Home Screen" onPress={() => console.log("Click")}/>
      </View>
      <View style={styles.signInButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 30,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center"
  },
  signInButton: {
    width: "100%",
    height: 70,
    backgroundColor: "blue",
  },
});

export default WelcomeScreen;
