import React, { Component } from "react";
import {
  ScrollView,
  Animated,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { CarouselText, CarouselDescription } from "./Text";

const OFFSET = 50;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;
const ITEM_HEIGHT = 420;

const cards = [
  {
    id: 0,
    title: "Rullino della Memoria",
    posterUrl: require("../assets/1.webp"),
    starsUrl: require("../assets/stars/stars.png"),
    description:
      "Immortala Frammenti dei tuoi ricordi nel rullino della memoria",
    price: "24.90 €",
  },
  {
    id: 1,
    title: "Spotify - Portachiave",
    posterUrl: require("../assets/8.webp"),
    starsUrl: require("../assets/stars/stars1.png"),
    description: "Incidete  in un portachiave la vostra canzone.",
    price: "15.90 €",
  },
  {
    id: 2,
    title: "Quadro - Coordinate ",
    posterUrl: require("../assets/2.jpeg"),
    starsUrl: require("../assets/stars/stars2.png"),
    description: "Il Luogo dove tutto è cominciato.",
    price: "24.90 €",
  },
  {
    id: 3,
    title: "Portachiave - dei ricordi",
    posterUrl: require("../assets/g1.webp"),
    starsUrl: require("../assets/stars/stars3.png"),
    description:
      "Rullino portachiave  dei ricordi per lui, per lei, per voi o per tuoi amici.",
    price: "14.90 €",
  },
];

export default function AdvancedCardCarousel() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ flex: 2 }}>
      <ScrollView
        horizontal={true}
        decelerationRate={"normal"}
        snapToInterval={ITEM_WIDTH}
        style={{ marginTop: 50, paddingHorizontal: 0 }}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={12}
      >
        {cards.map((item, idx) => {
          const inputRange = [
            (idx - 1) * ITEM_WIDTH,
            idx * ITEM_WIDTH,
            (idx + 1) * ITEM_WIDTH,
          ];

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === cards.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
              }}
            >
              <ImageBackground
                source={item.posterUrl}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",
                }}
                imageStyle={{ borderRadius: 10 }}
              />

              <CarouselText>{item.title}</CarouselText>
              <Image
                source={item.starsUrl}
                style={{
                  width: 200,
                  height: 30,
                  alignSelf: "center",
                  marginTop: 5,
                }}
                resizeMode="center"
              ></Image>

              <CarouselDescription>{item.description}</CarouselDescription>
              <CarouselDescription>{item.price}</CarouselDescription>
            </Animated.View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
