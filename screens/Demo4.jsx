import React from "react";
import { StyleSheet, View, Image, ImageBackground, SafeAreaView } from "react-native";
import { ButtonText, LogoText, LoginText, LoginText2, InputText } from "../components/Text";
import { FirstButton } from "../components/Button";
import { Div } from "../components/Div";
import { Pallino } from "../components/Checkbox/Checkbox";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pallino3 } from "../components/Checkbox/Checkbox3";

const Demo4 = ({ navigation }) => {
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
          style={{ width: "100%", height: "101%" }}
        >
          <Image
            source={require("../assets/leonardo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <LogoText style={styles.logoText}>Benvenuto, Leonardo</LogoText>
          <Div>
            <LoginText2 style={styles.loginText2}>
              Parlami un po’ di Te, così da mostrarti{"\n"}
              i Regali giusti e perfetti!
    
            </LoginText2>
            <LoginText style={styles.loginText}>Puoi scegliere più opzioni:</LoginText>
            </Div>           
            <Div style={styles.pallinoContainer}>
              <Pallino3 />
            </Div>
          <View style={styles.form}>
            <SafeAreaView>
              <FirstButton onPress={() => navigation.navigate("Loader2")}>
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
  loginText2: {
    paddingTop:40,
    lineHeight: 20,
    textAlign: "center",
  },
  loginText: {
    marginBottom:120,
    textDecorationLine: "underline",
  },

  pallinoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 130,
  },
});

export { Demo4 };
