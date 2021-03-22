import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background-image.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
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
    fontSize: moderateScale(33),
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: moderateScale(18),
    textAlign: "center",
  },
  textButton: {
    fontSize: moderateScale(18),
  },
  button: {
    width: scale(200),
    height: verticalScale(55),
    backgroundColor: colors.lightOrange,
    bottom: scale(125),
    borderRadius: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: scale(145),
    height: verticalScale(95),
  },
  logoContainer: {
    position: "absolute",
    top: verticalScale(120),
    alignItems: "center",
  },
});

export default WelcomeScreen;
