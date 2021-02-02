import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import selectionDesign from "../../config/selection";

function DogColorSelectionScreen(props) {
  const [isSelectedBig, setSelectBig] = useState(false);
  const [isSelectedSmall, setSelectSmall] = useState(false);
  const [isSelectedHighE, setSelectHighE] = useState(false);
  const [isSelectedLowE, setSelectLowE] = useState(false);
  const [isSelectedBlack, setSelectBlack] = useState(false);
  const [isSelectedWhite, setSelectWhite] = useState(false);
  const [isSelectedBrown, setSelectBrown] = useState(false);
  const [isSelectedRed, setSelectRed] = useState(false);
  const [isSelectedGold, setSelectGold] = useState(false);
  const [isSelectedGrey, setSelectGrey] = useState(false);

  return (
    <View style={selectionDesign.container}>
      <View style={selectionDesign.questionContainer}>
        <Text style={selectionDesign.quextionText}>Size</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setSelectBig(!isSelectedBig)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedBig ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedBig ? "#fff" : "#000" },
              ]}
            >
              Big
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectSmall(!isSelectedSmall)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedSmall ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedSmall ? "#fff" : "#000" },
              ]}
            >
              Small
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={selectionDesign.questionContainer}>
        <Text style={selectionDesign.quextionText}>Energy Level</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setSelectHighE(!isSelectedHighE)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedHighE ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedHighE ? "#fff" : "#000" },
              ]}
            >
              High-Energy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectLowE(!isSelectedLowE)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedLowE ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedLowE ? "#fff" : "#000" },
              ]}
            >
              Low-Energy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={selectionDesign.questionContainer}>
        <Text style={selectionDesign.quextionText}>Color</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setSelectBlack(!isSelectedBlack)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedBlack ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedBlack ? "#fff" : "#000" },
              ]}
            >
              Black
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectWhite(!isSelectedWhite)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedWhite ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedWhite ? "#fff" : "#000" },
              ]}
            >
              White
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setSelectBrown(!isSelectedBrown)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedBrown ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedBrown ? "#fff" : "#000" },
              ]}
            >
              Brown
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectRed(!isSelectedRed)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedRed ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedRed ? "#fff" : "#000" },
              ]}
            >
              Red
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setSelectGold(!isSelectedGold)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedGold ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedGold ? "#fff" : "#000" },
              ]}
            >
              Gold & Yellow
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectGrey(!isSelectedGrey)}
            style={[
              selectionDesign.button,
              { backgroundColor: isSelectedGrey ? "#000" : "#f2f2f2" },
            ]}
          >
            <Text
              style={[
                selectionDesign.buttonText,
                { color: isSelectedGrey ? "#fff" : "#000" },
              ]}
            >
              Grey
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={selectionDesign.questionContainer}>
        <TouchableOpacity>
          <Text style={selectionDesign.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DogColorSelectionScreen;
