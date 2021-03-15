import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import colors from "../config/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background-image.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <Text style={styles.textTitle}>Welcome to Doggy</Text>
        <Text style={styles.textDescription}>
          Search for cute dogs by their breed type.
          {"\n"} Click let's start to find cute dogs!
        </Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen", { name: "Home" })}
        >
          <Text style={styles.textButton}>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: 18,
    textAlign: "center",
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    width: "55%",
    height: "8%",
    backgroundColor: colors.lightOrange,
    bottom: "20%",
    borderRadius: 30,
    alignItems: "center",
    padding: "2%",
  },
  logo: {
    width: "33%",
    height: "110%",
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
  },
});

export default WelcomeScreen;
