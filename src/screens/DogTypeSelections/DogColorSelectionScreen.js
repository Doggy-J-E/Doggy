import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import selectionConfig from "../../config/selectionConfig";

function DogColorSelectionScreen(props) {
  const selectionNum = 6;

  return (
    <View style={selectionConfig.container}>
      <View
        style={[
          { paddingTop: `${100 / selectionNum + 10}%` },
          selectionConfig.questionTextContainer,
        ]}
      >
        <Text style={selectionConfig.text}>What color is a dog?</Text>
      </View>
      <View style={selectionConfig.buttonContainer}>
        <TouchableOpacity style={selectionConfig.button}>
          <Text style={selectionConfig.buttonText}>Black</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectionConfig.button}>
          <Text style={selectionConfig.buttonText}>White</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectionConfig.button}>
          <Text style={selectionConfig.buttonText}>Brown</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectionConfig.button}>
          <Text style={selectionConfig.buttonText}>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectionConfig.button}>
          <Text style={selectionConfig.buttonText}>Gold & Yellow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectionConfig.button}>
          <Text style={selectionConfig.buttonText}>Grey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DogColorSelectionScreen;
