import React from 'react';
import { StyleSheet, View, Image, ImageBackground, SafeAreaView } from 'react-native';
import { ButtonText, LogoText, LoginText, LoginText2,InputText } from '../components/Text';
import { FirstButton } from '../components/Button';
import { Div } from '../components/Div';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    HKGroteskBold: require('../assets/font/HKGrotesk-Bold.ttf'),
    HKGroteskRegular: require('../assets/font/HKGrotesk-Regular.ttf'),
  });

  let [fontsLoaded2] = useFonts({
    HKGroteskMedium: require('../assets/font/HKGrotesk-Medium.ttf'),
  });

  return (
    fontsLoaded && fontsLoaded2 && (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ width: '100%', height: '101%' }}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <LogoText style={styles.logoText}>Accedi</LogoText>
          <Div>
            <LoginText style={styles.LoginText}>Sei già dei nostri?</LoginText>
            <LoginText style={styles.LoginText}>Inserisci la tua email e la tua password</LoginText>
          </Div>
          <View style={styles.form}>
            <SafeAreaView>
              <InputText placeholder="Email" />
              <InputText secureTextEntry={true} placeholder="Password" />
              <FirstButton onPress={() => navigation.navigate('Demo')}>
                <ButtonText>Accedi</ButtonText>
              </FirstButton>
            </SafeAreaView>
          </View>
          <Div>
            <LoginText style={styles.LoginText}>Oppure</LoginText>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                style={styles.iconWrapper}
                onPress={() => navigation.navigate('Demo')}>
                <FontAwesome
                  name="google"
                  size={24}
                  color="#4285F4"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconWrapper}
                onPress={() => navigation.navigate('Demo')}>
                <FontAwesome
                  name="facebook"
                  size={24}
                  color="#1877F2"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconWrapper}
                onPress={() => navigation.navigate('Demo')}>
                <FontAwesome
                  name="apple"
                  size={24}
                  color="#000000"
                />
              </TouchableOpacity>
            </View>
          </Div>
          <Div>
          <LoginText style={styles.LoginText}>Hai <LoginText2 style={styles.LoginText2}>dimenticato</LoginText2> la pasword?</LoginText>
            <LoginText style={styles.LoginText}>Non sei registrato? <LoginText2 style={styles.LoginText2}>Registrati qui.</LoginText2></LoginText>
          </Div>
         
          
          
        </ImageBackground>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoText: {
    paddingTop: 0,
    marginBottom: 0,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50,
    width: 200,
    height: 100,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 40,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  iconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#FDE2D2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginText: {
paddingBottom: 10,
  },
});

export { Home };