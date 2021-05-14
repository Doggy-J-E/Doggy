import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "../config/context";

const TermsConditionScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.welcomeText}>Doggy!</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.terms}>
          <Text style={styles.termsTitle}>Terms & Conditions</Text>
          <Text style={styles.termsContent}>
            Thank you for choosing Doggy!
            {"\n\n"}
            Your privacy is important to us. It is Doggy’s policy to respect
            your privacy regarding any information we may collect from you
            across our application and other sites we own and operate.
            {"\n\n"}
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
            {"\n\n"}
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
            {"\n\n"}
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
            {"\n\n"}
            Our application may link to external sites that are not operated by
            us. Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
            {"\n\n"}
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
            {"\n\n"}
            This app uses an external API to render all the dog information. We
            are not responsible for the naming, traits and information that you
            encounter in this app. For more information,
            https://www.thedogapi.com/
            {"\n\n"}
            All icons used in this app can be found
            (https://ionic.io/ionicons/v4). The logo was created using a tool
            (https://www.freelogodesign.org/). All background images can be
            found (https://www.pexels.com/).
            {"\n\n"}
            Your continued use of our application will be regarded as acceptance
            of our practices around privacy and personal information. If you
            have any questions about how we handle user data and personal
            information, feel free to contact us.
            {"\n\n"}
            This policy is effective as of May 13 2021.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={
            () => signIn()
            //navigation.navigate("HomeScreen", { name: "Home" })
          }
        >
          <Text style={styles.buttonText}> Accept</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    marginTop: verticalScale(10),
    paddingLeft: scale(20),
    paddingRight: scale(20),
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: scale(100),
    height: verticalScale(40),
    borderRadius: moderateScale(100),
    backgroundColor: colors.lightOrange,
    marginBottom: verticalScale(20),
  },
  buttonText: {
    fontSize: moderateScale(15),
    fontFamily: "ubuntu-bold",
  },
  container: {
    backgroundColor: colors.grey,
  },
  terms: {
    elevation: 1,
    padding: moderateScale(24),
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
    borderRadius: moderateScale(16),
    backgroundColor: colors.grey,
    borderColor: colors.darkOrange,
    borderWidth: moderateScale(1),
  },
  termsContent: {
    fontSize: moderateScale(12),
    textAlign: "justify",
    marginTop: verticalScale(10),
    fontFamily: "nunito-regular",
  },
  termsTitle: {
    fontSize: moderateScale(16),
    alignSelf: "center",
    fontFamily: "nunito-bold",
  },
  welcome: {
    marginTop: verticalScale(70),
    alignItems: "center",
  },
  welcomeText: {
    fontSize: moderateScale(28),
    color: colors.darkOrange,
    fontFamily: "ubuntu-bold",
  },
});

export default TermsConditionScreen;
