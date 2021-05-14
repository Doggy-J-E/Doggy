import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

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
        <ScrollView style={styles.dogInfoContainer}>
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
            <Text style={styles.bredContainer}>
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
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: verticalScale(7),
  },
  dogInfoContainer: {
    alignSelf: "center",
    width: scale(300),
    marginTop: verticalScale(10),
  },
  row: {
    flexDirection: "row",
    marginTop: moderateScale(5),
  },
  nameContainer: {
    alignSelf: "center",
    width: scale(320),
  },
  nameTextStyle: {
    textAlign: "center",
    fontSize: moderateScale(30),
    color: colors.lightOrange,
    fontFamily: "ubuntu-bold",
  },
  image: {
    alignSelf: "center",
    resizeMode: "stretch",
    width: scale(320),
    height: verticalScale(230),
    marginTop: verticalScale(5),
    borderRadius: moderateScale(10),
  },
  titleTextStyle: {
    fontSize: moderateScale(15),
    fontFamily: "nunito-bold",
  },
  contentTextStyle: {
    fontSize: moderateScale(15),
    fontFamily: "nunito-regular",
  },
  bredContainer: {
    width: scale(250),
    fontSize: moderateScale(15),
  },
  temperamentContainer: {
    width: scale(205),
  },
});

export default DetailsScreen;
