import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";

import colors from "../config/colors";
import screen from "../config/screen";

const SearchResultScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [searchResultArr, setSearchResultArr] = useState([]);
  const [imageArr, setImageArr] = useState([]);

  const getSearchResultFromApi = async () => {
    await getBreadInfoFromApi();
    await getImage();
  };
  const getBreadInfoFromApi = async () => {
    fetch("https://api.thedogapi.com/v1/breeds/search?name=old")
      .then((response) => response.json())
      .then((json) => setSearchResultArr(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const getImage = async () => {
    console.log("start get image");
    for (let i = 0; i < searchResultArr.length; i++) {
      let imageApi = "https://api.thedogapi.com/v1/images/";
      imageApi += searchResultArr[i].reference_image_id;
      fetch(imageApi)
        .then((response) => response.json())
        .then((json) => {
          setImageArr((imageArr) => imageArr.concat(json.url));
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    getSearchResultFromApi();
  });

  renderSearchResults = () => {
    return (
      <View>
        {searchResultArr.map((data, index) => {
          return (
            <View key={index} style={styles.recordContainer}>
              <TouchableOpacity>
                <View style={styles.row}>
                  <Image
                    style={styles.image}
                    source={{ uri: imageArr[index] }}
                  ></Image>
                  <View style={styles.recordTextConteiner}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.origin}>Origin: {data.origin}</Text>
                    <Text>Life Span: {data.life_span}</Text>
                    <Text numberOfLines={1}>{data.temperament}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={screen.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView style={styles.listContainer}>
          {renderSearchResults()}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: moderateScale(10),
  },
  recordContainer: {
    width: verticalScale(390),
    height: scale(100),
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

export default SearchResultScreen;
