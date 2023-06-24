import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
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
import { Pallino } from "../components/Checkbox";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Demo2 = ({ navigation }) => {
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
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/bg.png")}
          style={{ width: "100%", height: "101%" }}
        >
          <Image
            source={require("../assets/leonardo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <LogoText style={styles.logoText}>Benvenuto, Leonardo</LogoText>
          <Div>
            <LoginText2 style={styles.LoginText2}>Parlami un po’ di Te, così da mostrarti {"\n"}
            i Regali giusti e perfetti!</LoginText2>
          </Div>
          <Div>
          <LoginText style={styles.LoginText}>Puoi Scegliere più opzioni:    </LoginText>
          </Div>
          <View style={styles.form}>

            <SafeAreaView>
              <Pallino />
              <FirstButton onPress={() => navigation.navigate("Demo")}>
                <ButtonText>Procedi</ButtonText>
              </FirstButton>
            </SafeAreaView>
          </View>
        </ImageBackground>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoText: {
    paddingTop: 10,
    marginBottom: 0,
  },
  logo: {
    alignSelf: "center",
    marginTop: 100,
    width: 200,
    height: 150,
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
    paddingBottom: 300,
    textDecorationLine: "underline",
   
  },
  LoginText2: {
    paddingBottom: 100,
    textAlign: "center",

  },
});

export { Demo2 };
