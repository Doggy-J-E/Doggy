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

import colors from "../config/colors";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import screen from "../config/screen";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [imageArr, setImageArr] = useState([]);

  useEffect(() => {
    getSearchResultFromApi();
  }, []);

  const getSearchResultFromApi = async () => {
    await getBreadInfoFromApi();
    //await getImage();
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

  // const getImage = async () => {
  //   //console.log("start get image");
  //   for (let i = 0; i < search.length; i++) {
  //     let imageApi = "https://api.thedogapi.com/v1/images/";
  //     imageApi += search[i].reference_image_id;
  //     fetch(imageApi)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setImageArr((imageArr) => imageArr.concat(json.url));
  //       })
  //       .catch((error) => console.error(error))
  //       .finally(() => setLoading(false));
  //   }
  // };

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
        <TouchableOpacity onPress={() => getItem(item)}>
          <View style={styles.row}>
            {/* <Image style={styles.image} source={{ uri: imageArr[index] }} /> */}
            <View style={styles.recordTextConteiner}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.origin}>Origin: {item.origin}</Text>
              <Text>Life Span: {item.life_span}</Text>
              <Text numberOfLines={3}>{item.temperament}</Text>
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
        <SafeAreaView style={{ flex: 1 }}>
          <SearchBar
            round
            lightTheme
            containerStyle={styles.search}
            inputContainerStyle={{ backgroundColor: colors.white }}
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
    marginBottom: moderateScale(5),
    marginTop: moderateScale(5),
  },
  listContainer: {
    margin: moderateScale(10),
  },
  recordContainer: {
    width: verticalScale(390),
    height: scale(120),
    marginBottom: moderateScale(10),
    backgroundColor: colors.lightOrange,
  },
  recordTextConteiner: {
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    marginTop: moderateScale(5),
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: verticalScale(108),
    height: scale(90),
    marginLeft: moderateScale(6),
    marginTop: scale(5),
  },
  name: {
    fontSize: moderateScale(25),
    color: colors.white,
    fontWeight: "bold",
  },
  origin: {
    fontSize: moderateScale(18),
  },
});

export default HomeScreen;
