import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Checkbox } from "react-native-paper";

const Pallino = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Qual'è l'età della persona a cui desideri fare il regalo?</Text>
      <View style={styles.itemContainer}>
        <Checkbox.Item
          label="• 12 > 25 anni"
          status={checkedItems.includes("12-25") ? "checked" : "unchecked"}
          onPress={() => handleCheckboxChange("12-25")}
          color="#E74646"
        />
      </View>
      <View style={styles.itemContainer}>
        <Checkbox.Item
          label="• 25 > 45 anni"
          status={checkedItems.includes("25-45") ? "checked" : "unchecked"}
          onPress={() => handleCheckboxChange("25-45")}
          color="#E74646"
        />
      </View>
      <View style={styles.itemContainer}>
        <Checkbox.Item
          label="• 50 > oltre"
          status={checkedItems.includes("50-older") ? "checked" : "unchecked"}
          onPress={() => handleCheckboxChange("50-older")}
          color="#E74646"
        />
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
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
});

export { Pallino };
