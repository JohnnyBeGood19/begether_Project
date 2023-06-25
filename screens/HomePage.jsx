import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  LogoText,
  LoginText2,
} from "../components/Text";
import { useFonts } from "expo-font";
import AdvancedCardCarousel from "../components/Carousel";
import AdvancedCardCarousel1 from "../components/Carousel1";

import navImage from "../assets/nav.png";

const HomePage = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    HKGroteskBold: require("../assets/font/HKGrotesk-Bold.ttf"),
    HKGroteskRegular: require("../assets/font/HKGrotesk-Regular.ttf"),
  });

  let [fontsLoaded2] = useFonts({
    HKGroteskMedium: require("../assets/font/HKGrotesk-Medium.ttf"),
  });

  return (
    fontsLoaded && fontsLoaded2 && (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollView>
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
            <Image
              source={require("../assets/pillole.png")}
              style={styles.pillole}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/blog.png")}
              style={styles.blog}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/cerca.png")}
              style={styles.cerca}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/follow.png")}
              style={styles.follow}
              resizeMode="contain"
            />
          </ScrollView>

          <Image
            source={navImage}
            style={styles.nav}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>
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
    height: 1000,
    alignSelf: "center",
  },
  cerca: {
    bottom: 300,
    width: 350,
    height: 300,
    alignSelf: "center",
  },
  follow: {
    bottom: 100,
    width: 380,
    height: 800,
    alignSelf: "center",
  },
  logoText: {
    paddingTop: 30,
    textAlign: "center",
    fontSize: 25,
  },
  logoText3: {
    paddingTop: 0,
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
  loginText2: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "regular",
    paddingTop: 10,
  },
  nav: {
    position: "absolute",
    bottom: -50,
    width: 800,
    height: 150,
    alignSelf: "center",
  },
});

export { HomePage };
