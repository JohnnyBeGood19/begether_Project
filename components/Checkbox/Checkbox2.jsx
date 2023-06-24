import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Checkbox } from "react-native-paper";

const Pallino2 = () => {
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
      <Text style={styles.questionText}>Qual'è il genere della persona a cui desideri fare il regalo?</Text>
      <View style={styles.itemContainer}>
        <Checkbox.Item
          label="• Partner"
          status={checkedItems.includes("Partner") ? "checked" : "unchecked"}
          onPress={() => handleCheckboxChange("Partner")}
          color="#E74646"
        />
      </View>
      <View style={styles.itemContainer}>
        <Checkbox.Item
          label="• Amici"
          status={checkedItems.includes("Amici") ? "checked" : "unchecked"}
          onPress={() => handleCheckboxChange("Amici")}
          color="#E74646"
        />
      </View>
      <View style={styles.itemContainer}>
        <Checkbox.Item
          label="• Me Stesso"
          status={checkedItems.includes("Me Stesso") ? "checked" : "unchecked"}
          onPress={() => handleCheckboxChange("Me Stesso")}
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

export { Pallino2 };
