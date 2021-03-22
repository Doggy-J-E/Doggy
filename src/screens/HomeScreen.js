import React, { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SearchBar } from "react-native-elements";

import screen from "../config/screen";
import colors from "../config/colors";
import { scale, moderateScale, verticalScale } from "../config/scaling";

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
    marginTop: verticalScale(70),
    width: moderateScale(330, 0.4),
    alignSelf: "center",
  },
  input: {
    backgroundColor: colors.white,
  },
});
export default HomeScreen;
