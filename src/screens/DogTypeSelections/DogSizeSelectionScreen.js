import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import selectionConfig from "../../config/selectionConfig";

function DogSizeSelectionScreen(props) {
  const selectionNum = 2;

  return (
    <View style={selectionConfig.container}>
      <View
        style={[
          { paddingTop: `${100 / selectionNum}%` },
          selectionConfig.questionTextContainer,
        ]}
      >
        <Text style={selectionConfig.text}>How big is a dog?</Text>
      </View>
      <View style={selectionConfig.buttonContainer}>
        <TouchableOpacity style={selectionConfig.button}>
          <Text style={selectionConfig.buttonText}>Big</Text>
        </TouchableOpacity>
        <TouchableOpacity style={selectionConfig.button}>
          <Text style={selectionConfig.buttonText}>Small</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DogSizeSelectionScreen;
