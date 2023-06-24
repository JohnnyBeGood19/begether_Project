import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Checkbox } from "react-native-paper";

const Pallino = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const handleCheck1 = () => {
    setChecked1(!checked1);
    setChecked2(false);
    setChecked3(false);
  };

  const handleCheck2 = () => {
    setChecked1(false);
    setChecked2(!checked2);
    setChecked3(false);
  };

  const handleCheck3 = () => {
    setChecked1(false);
    setChecked2(false);
    setChecked3(!checked3);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Checkbox.Android
          status={checked1 ? "checked" : "unchecked"}
          onPress={handleCheck1}
          color="#E74646"
        />
        <Text style={styles.label}>12 > 25 anni</Text>
      </View>
      <View style={styles.itemContainer}>
        <Checkbox.Android
          status={checked2 ? "checked" : "unchecked"}
          onPress={handleCheck2}
          color="#E74646"
        />
        <Text style={styles.label}>25 > 45 anni</Text>
      </View>
      <View style={styles.itemContainer}>
        <Checkbox.Android
          status={checked3 ? "checked" : "unchecked"}
          onPress={handleCheck3}
          color="#E74646"
        />
        <Text style={styles.label}>50 > oltre</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  label: {
    flex: 1,
  },
});

export { Pallino };
