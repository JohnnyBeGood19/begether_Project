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
import { useFonts } from "expo-font";
import { Select } from "../components/Switch";

const Demo = ({ navigation }) => {
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
          style={styles.imageBackground}
        >
          <Image
            source={require("../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Div>
            <LoginText style={styles.loginText}>
              Entra a far parte della Begether Family {"\n"}
              Registrati per iniziare ad utilizzare il servizio
            </LoginText>
          </Div>
          <View style={styles.form}>
            <SafeAreaView>
              <InputText placeholder="Email" />
              <InputText placeholder="Nome" />
              <InputText placeholder="Cognome" />
              <InputText secureTextEntry={true} placeholder="Password" />

              <Select />

              <FirstButton onPress={() => navigation.navigate("Demo2")}>
                <ButtonText>Accedi</ButtonText>
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
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  logo: {
    alignSelf: "center",
    marginTop: 60,
    width: 200,
    height: 80,
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 80,
  },
  loginText: {
    textAlign: "center",
    color: "black",
    marginBottom: 20,
  },
});

export { Demo };
