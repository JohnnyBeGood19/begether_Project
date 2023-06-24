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
const ITEM_HEIGHT = 500;

const cards = [
  {
    id: 0,
    title: "I fogliettini in sbatti",
    posterUrl: require("../assets/foglietto.png"),
    starsUrl: require("../assets/stars/stars3.png"),
    description:
      "Annota tutto nei fogliettini Imbruttiti, appiccicali dove ti pare e non intasare più il calendario dello smartphone!",
    price: "4.90 €",
    buttonUrl: require("../assets/button.png"),
  },
  {
    id: 1,
    title: "Toblerone - personalizzato",
    posterUrl: require("../assets/toblerone.webp"),
    starsUrl: require("../assets/stars/stars3.png"),
    description: "Cioccolato: cioccolato al latte con miele e torrone alle mandorle.",
    price: "6.00 €",
    buttonUrl: require("../assets/button.png"),
  },
  {
    id: 2,
    title: "Puzzle XL ",
    posterUrl: require("../assets/puzzle.png"),
    starsUrl: require("../assets/stars/stars2.png"),
    description: "Il tuo Puzzle dei Ricordi.",
    price: "54.90 €",
    buttonUrl: require("../assets/button.png"),
  },
  {
    id: 3,
    title: "Yam Lab GiftCard",
    posterUrl: require("../assets/shop.png"),
    starsUrl: require("../assets/stars/stars2.png"),
    description:
      "Laboratorio di Tufting.",
    price: "58.00 €",
    buttonUrl: require("../assets/button.png"),
  },
  {
    id: 4,
    title: "Regalo fatto a Mano",
    posterUrl: require("../assets/pensiero.webp"),
    starsUrl: require("../assets/stars/stars3.png"),
    description:
      "A Natale conta il pensiero.",
    price: "4.90 €",
    buttonUrl: require("../assets/button.png"),
  },
];

export default function AdvancedCardCarousel1() {
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
              <Image
                source={item.buttonUrl}
                style={{
                  width: 300,
                  height: 50,
                  alignSelf: "center",
                  marginTop: 10,
                  borderRadius: 10,
                }}
                resizeMode="center"
              ></Image>
            </Animated.View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
