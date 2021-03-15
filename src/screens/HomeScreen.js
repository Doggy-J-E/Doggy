import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SearchBar } from "react-native-elements";

import screen from "../config/screen";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  return (
    <ImageBackground
      style={screen.backgroundImage}
      source={require("../../assets/background-image.jpg")}
    >
      <SearchBar
        containerStyle={styles.searchBar}
        inputStyle={styles.input}
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      ></SearchBar>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginTop: "20%",
    width: "95%",
    alignSelf: "center",
  },
  input: {
    backgroundColor: "white",
  },
});
export default HomeScreen;
