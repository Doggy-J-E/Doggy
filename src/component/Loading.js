import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { Animated, Easing, StyleSheet, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Indicator from "./Indicator";
import colors from "../config/colors";
import { moderateScale } from "../config/scaling";

//Code from https://github.com/n4kz/react-native-indicators
//Partially change the design

export default class Loading extends PureComponent {
  static defaultProps = {
    animationEasing: Easing.inOut(Easing.ease),

    color: colors.grey,
    count: 5,
    size: 20,
  };

  static propTypes = {
    ...Indicator.propTypes,

    color: PropTypes.string,
    size: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent({ index, count, progress }) {
    let { size, color: backgroundColor } = this.props;

    let style = {
      width: size,
      height: size,
      margin: size / 2,
      borderRadius: size / 2,
      backgroundColor,
      transform: [
        {
          scale: progress.interpolate({
            inputRange: [
              0.0,
              (index + 0.5) / (count + 1),
              (index + 1.0) / (count + 1),
              (index + 1.5) / (count + 1),
              1.0,
            ],
            outputRange: [1.0, 1.36, 1.56, 1.06, 1.0],
          }),
        },
      ],
    };

    return <Animated.View style={style} {...{ key: index }} />;
  }

  render() {
    let { style, ...props } = this.props;

    return (
      <View style={styles.container}>
        <Ionicons
          name={"paw-outline"}
          color={colors.grey}
          size={moderateScale(90)}
        />
        <Indicator
          style={[styles.containerIndicator, style]}
          renderComponent={this.renderComponent}
          {...props}
        />

        <Text style={styles.text}> Loading cute dogs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightOrange,
  },
  containerIndicator: {
    flexDirection: "row",
  },
  text: {
    fontSize: moderateScale(18),
    color: colors.grey,
    fontFamily: "ubuntu-regular",
  },
});
