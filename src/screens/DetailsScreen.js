import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";

const DetailsScreen = ({ route, navigation }) => {
  const { dogInfo } = route.params;

  renderContent = (content) => {
    if (typeof content === "undefined" || content === "") {
      return <Text>Unknown</Text>;
    } else {
      return <Text>{content}</Text>;
    }
  };

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTextStyle}>{dogInfo.name}</Text>
        </View>

        <Image style={styles.image} source={{ uri: dogInfo.image.url }} />
        <View style={styles.dogInfoContainer}>
          <View style={styles.row}>
            <Text style={styles.titleTextStyle}>Origin: </Text>
            <Text style={styles.contentTextStyle}>
              {renderContent(dogInfo.origin)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titleTextStyle}>Weight: </Text>
            <Text style={styles.contentTextStyle}>
              {dogInfo.weight.metric} kg
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titleTextStyle}>Height: </Text>
            <Text style={styles.contentTextStyle}>
              {dogInfo.height.metric} cm
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titleTextStyle}>Bred for: </Text>
            <Text style={styles.contentTextStyle}>
              {renderContent(dogInfo.bred_for)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titleTextStyle}>Bred group: </Text>
            <Text style={styles.contentTextStyle}>
              {renderContent(dogInfo.breed_group)}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titleTextStyle}>Life span: </Text>
            <Text style={styles.contentTextStyle}>{dogInfo.life_span}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.titleTextStyle}>Temperament: </Text>
            <View style={styles.temperamentContainer}>
              <Text style={styles.contentTextStyle}>{dogInfo.temperament}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: moderateScale(7),
  },
  dogInfoContainer: {
    alignSelf: "center",
    width: verticalScale(350),
    marginTop: moderateScale(5),
  },
  row: {
    flexDirection: "row",
    marginTop: moderateScale(5),
  },
  widthHeightContainer: {
    width: verticalScale(180),
    alignItems: "center",
  },
  nameContainer: {
    alignSelf: "center",
    width: verticalScale(350),
  },
  nameTextStyle: {
    textAlign: "center",
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: colors.lightOrange,
  },
  image: {
    alignSelf: "center",
    width: verticalScale(350),
    height: scale(230),
    marginLeft: moderateScale(6),
    marginTop: scale(5),
    borderRadius: moderateScale(10),
  },
  titleTextStyle: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
  },
  contentTextStyle: {
    fontSize: moderateScale(15),
  },
  temperamentContainer: {
    width: verticalScale(240),
  },
});

export default DetailsScreen;
