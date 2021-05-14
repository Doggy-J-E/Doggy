import React from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";

import { scale, verticalScale } from "../config/scaling";
import colors from "../config/colors";

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/doggy_logo.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
  },
  image: {
    width: scale(200),
    height: verticalScale(250),
  },
});

export default LoadingScreen;
