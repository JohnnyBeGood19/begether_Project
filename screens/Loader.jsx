import React, { useEffect, useRef } from "react";
import { StyleSheet, View,  ImageBackground, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Loader = () => {
  const navigation = useNavigation();
  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    rotateAnimation.start();

    const timer = setTimeout(() => {
      navigation.replace("Home"); // Naviga al componente Home dopo 4 secondi
    }, 4000);

    return () => {
      clearTimeout(timer); // Cancella il timer quando il componente viene smontato
      rotateAnimation.stop();
    };
  }, []);

  const rotateInterpolation = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "101%" }}
      >
        <View style={styles.loaderContainer}>
          <Animated.Image
            source={require("../assets/loader.png")}
            style={[styles.logo, { transform: [{ rotate: rotateInterpolation }] }]}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loaderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export { Loader };