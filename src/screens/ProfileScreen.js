import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={30} color="#52585D"></Ionicons>
          <Text style={styles.appName}>Put our App Name here</Text>
          <Ionicons
            name="md-ellipsis-vertical"
            size={30}
            color="#52575D"
          ></Ionicons>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.about}>About Us</Text>
          <View style={styles.profileImage}>
            <Image
              source={require("../../assets/profile/about-us-2.jpg")}
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Hyunji Lee</Text>
            <Text style={styles.job}>Developer</Text>
          </View>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../../assets/profile/about-us-1.jpg")}
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>Elisa Ng Li</Text>
            <Text style={styles.job}>Developer</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10,
    // marginHorizontal: 16,
    padding: 5,
    backgroundColor: "#87CEEB",
  },
  appName: {
    alignSelf: "center",
    fontSize: 20,
  },
  about: {
    fontSize: 30,
    marginBottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  name: {
    color: "#52575D",
    fontSize: 25,
  },
  job: {
    color: "#52575D",
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ProfileScreen;
