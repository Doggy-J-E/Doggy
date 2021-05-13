import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

import colors from "../config/colors";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import screen from "../config/screen";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getSearchResultFromApi();
  }, []);

  const getSearchResultFromApi = async () => {
    await getBreadInfoFromApi();
  };
  const getBreadInfoFromApi = async () => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((response) => response.json())
      .then((json) => {
        setFilteredDataSource(json);
        setMasterDataSource(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        //search by the name of the breed
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item, index }) => {
    return (
      <View key={index} style={styles.recordContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailsScreen", {
              dogInfo: item,
            })
          }
        >
          <View style={styles.row}>
            <Image style={styles.image} source={{ uri: item.image.url }} />
            <View style={styles.recordTextConteiner}>
              <Text style={styles.name}>{item.name}</Text>
              <Text numberOfLines={3}>{item.temperament}</Text>
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
      </View>
    );
  };

  const getItem = (item) => {
    //Maybe redirect to the details page
    alert("Id : " + item.id + " Name : " + item.name);
  };

  return (
    <View style={screen.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView style={screen.container}>
          <SearchBar
            round
            lightTheme
            containerStyle={styles.search}
            inputContainerStyle={{ backgroundColor: colors.grey }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            placeholder="Search something like: Golden"
            value={search}
          />
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ItemView}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.lightOrange,
    marginBottom: verticalScale(5),
    marginTop: verticalScale(5),
  },
  listContainer: {
    margin: moderateScale(10),
  },
  recordContainer: {
    alignSelf: "center",
    width: scale(335),
    height: verticalScale(110),
    marginBottom: verticalScale(10),
    backgroundColor: colors.grey,
    borderRadius: moderateScale(10),
  },
  recordTextConteiner: {
    marginLeft: scale(10),
    marginRight: scale(10),
    marginTop: verticalScale(5),
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    width: 0,
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: scale(90),
    height: verticalScale(90),
    marginLeft: moderateScale(6),
    marginTop: moderateScale(10),
    borderRadius: moderateScale(15),
  },
  icon: {
    alignSelf: "center",
    marginRight: scale(5),
  },
  name: {
    fontSize: moderateScale(20),
    color: colors.darkOrange,
    fontWeight: "bold",
  },
  origin: {
    fontSize: moderateScale(15),
  },
});

export default HomeScreen;
