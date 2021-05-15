import React from "react";
import renderer from "react-test-renderer";
import LoadingScreen from "../src/screens/LoadingScreen";

test("renders correctly", () => {
  const tree = renderer.create(<LoadingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
