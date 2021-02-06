import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView,
} from "react-native";

import colors from "../config/colors";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}>
        <Button
          title="About us"
          onPress={() =>
            navigation.navigate("ProfileScreen", { name: "About Us" })
          }
        />
      </View>
      <View style={styles.deleteIcon}>
        <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/dogs.jpg")}
      />
      <Text style={styles.text}>Find Cute dogs here!</Text>
      <View style={styles.findIcon}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 300,
    left: 40,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 300,
    right: 40,
  },
  findIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 300,
    right: 180,
  },
  image: {
    width: "100%",
    height: "35%",
  },
  text: {
    textAlign: "center",
  },
});
export default HomeScreen;
