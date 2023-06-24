import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  ButtonText,
  LogoText,
  LoginText,
  LoginText2,
  InputText,
} from "../components/Text";
import { FirstButton } from "../components/Button";
import { Div } from "../components/Div";
import { useFonts } from "expo-font";
import AdvancedCardCarousel from "../components/Carousel";
import AdvancedCardCarousel1 from "../components/Carousel1";

const HomePage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    HKGroteskBold: require("../assets/font/HKGrotesk-Bold.ttf"),
    HKGroteskRegular: require("../assets/font/HKGrotesk-Regular.ttf"),
  });

  let [fontsLoaded2] = useFonts({
    HKGroteskMedium: require("../assets/font/HKGrotesk-Medium.ttf"),
  });

  return (
    fontsLoaded &&
    fontsLoaded2 && (
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          source={require("../assets/bg.png")}
          style={{ width: "100%", height: "105%" }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/hamburger.png")}
            style={styles.logomenu}
            resizeMode="contain"
          />
          <Image
            source={require("../assets/home.png")}
            style={styles.bghome}
            resizeMode="contain"
          />
          <Image />

          <LogoText style={styles.logoText}>NUOVI ARRIVI</LogoText>
          <LoginText2 style={styles.loginText2}>Guarda Tutto</LoginText2>

          <AdvancedCardCarousel />
          <LogoText style={styles.logoText3}>BEST SELLERS</LogoText>
          <LoginText2 style={styles.loginText2}>Guarda Tutto</LoginText2>
          <AdvancedCardCarousel1 />
          <Image
          source={require("../assets/non.png")}
          style={styles.non}
          resizeMode="contain"
        />
        <Image />
        <Image
          source={require("../assets/pillole.png")}
          style={styles.pillole}
          resizeMode="contain"
        />
        <Image />
        <Image
          source={require("../assets/blog.png")}
          style={styles.blog}
          resizeMode="contain"
        />
        <Image />
        <Image
          source={require("../assets/cerca.png")}
          style={styles.cerca}
          resizeMode="contain"
        />
        <Image />
        <Image
          source={require("../assets/follow.png")}
          style={styles.follow}
          resizeMode="contain"
        />
        <Image />
        </ImageBackground>

      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },
  bghome: {
    marginTop: 30,
  },
  non: {
    top: 0,
    width: 800,
    height: 900,
    alignSelf: "center",
  },
  pillole: {
    top: 40,
    width: 1000,
    height: 750,
    alignSelf: "center",
  },
  blog: {
    bottom: 130,
    width: 350,
    height: 800,
    alignSelf: "center",
  },
  cerca: {
    bottom: 450,
    width: 350,
    height: 800,
    alignSelf: "center",
  },
  follow: {
    bottom: 700,
    width: 380,
    height: 900,
    alignSelf: "center",
  },
  logoText: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: 25,
  },
  logoText3: {
    paddingTop:0,
    textAlign: "center",
    fontSize: 25,
  },
  logo: {
    alignSelf: "center",
    marginTop: 50,
    marginLeft: 30,
    width: 200,
    height: 100,
  },
  logomenu: {
    alignSelf: "flex-start",
    marginTop: -77,
    marginLeft: 30,
    width: 30,
    height: 50,
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#FDE2D2",
    justifyContent: "center",
    alignItems: "center",
  },
  LoginText: {
    paddingBottom: 10,
  },
  loginText2: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "regular",
    paddingTop: 10,
  },

});

export { HomePage };
