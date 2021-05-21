import React, { Component } from "react";
import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { verticalScale, scale, moderateScale } from "../config/scaling";
import colors from "../config/colors";

class PetItem extends Component {
  render = () => {
    const { action, imageUrl, name, temperament } = this.props;
    return (
      <TouchableOpacity onPress={action}>
        <View style={styles.row}>
          <Image style={styles.image} source={{ uri: imageUrl }} />

          <View style={styles.recordTextContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text numberOfLines={3} style={styles.temperament}>
              {temperament}
            </Text>
          </View>
          <View style={styles.icon}>
            <Ionicons
              name={"chevron-forward-outline"}
              color={colors.darkOrange}
              size={moderateScale(25)}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  recordTextContainer: {
    width: scale(200),
    height: verticalScale(100),
    marginLeft: scale(10),
    marginRight: scale(10),
    marginTop: verticalScale(5),
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    width: 0,
  },
  image: {
    width: scale(90),
    height: verticalScale(90),
    resizeMode: "stretch",
    marginLeft: moderateScale(6),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(10),
  },
  arrow: {
    fontWeight: "bold",
    fontFamily: "ubuntu-regular",
    fontSize: moderateScale(25),
    color: colors.darkOrange,
  },
  icon: {
    alignSelf: "center",
    marginRight: scale(5),
  },
  name: {
    fontSize: moderateScale(20),
    color: colors.darkOrange,
    fontFamily: "ubuntu-bold",
  },
  temperament: {
    fontSize: moderateScale(13),
    fontFamily: "nunito-regular",
  },
});

export default PetItem;
