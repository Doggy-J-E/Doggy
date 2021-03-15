import { Dimensions } from "react-native";

export default {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "stretch",
  },
};
