import { Dimensions } from "react-native";
import color from "./colors";
export default {
  container: {
    flex: 1,
    backgroundColor: color.lightOrange,
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    resizeMode: "stretch",
  },
};
