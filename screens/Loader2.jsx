import React, { useEffect, useRef } from "react";
import { StyleSheet, View, ImageBackground, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Loader2 = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1.5)).current;

  useEffect(() => {
    const scaleAnimation = Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const timer = setTimeout(() => {
      navigation.replace("HomePage");
    }, 4000);

    scaleAnimation.start();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/bg.png")} style={{ width: "100%", height: "101%" }}>
        <View style={styles.loaderContainer}>
          <Animated.Image
            source={require("../assets/logo.png")}
            style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
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

export { Loader2 };
