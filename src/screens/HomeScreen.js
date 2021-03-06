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

import colors from "../config/colors";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import screen from "../config/screen";
import Loading from "../component/Loading";
import PetItem from "../component/PetItem";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getBreadInfoFromApi()
      .then((data) => {
        if (isMounted) {
          setMasterDataSource(data);
          setFilteredDataSource(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const getBreadInfoFromApi = async () => {
    return new Promise(function (resolve, reject) {
      fetch("https://api.thedogapi.com/v1/breeds")
        .then((response) => response.json())
        .then((json) => {
          resolve(json);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => setLoading(false));
    });
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
        <PetItem
          imageUrl={item.image.url}
          name={item.name}
          temperament={item.temperament}
          action={() =>
            navigation.navigate("DetailsScreen", {
              dogInfo: item,
            })
          }
        />
      </View>
    );
  };

  return (
    <View style={screen.container}>
      {isLoading ? (
        <Loading preLoaderVisible={isLoading} />
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
          {filteredDataSource.length === 0 ? (
            <SafeAreaView style={styles.noResult}>
              <Image
                style={styles.noResultImage}
                source={require("../../assets/doggy_logo_grey.png")}
              />
              <Text style={styles.noResultText}>Sorry, no results found</Text>
            </SafeAreaView>
          ) : (
            <FlatList
              data={filteredDataSource}
              keyExtractor={(item, index) => index.toString()}
              renderItem={ItemView}
            />
          )}
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

  noResult: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  noResultText: {
    fontSize: moderateScale(40),
    textAlign: "center",
    color: colors.grey,
  },
  noResultImage: {
    width: scale(180),
    height: verticalScale(180),
  },
});

export default HomeScreen;
