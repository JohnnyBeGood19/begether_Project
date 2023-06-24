import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const Select = () => {
  const [switch1Enabled, setSwitch1Enabled] = useState(false);
  const [switch2Enabled, setSwitch2Enabled] = useState(false);
  const [switch3Enabled, setSwitch3Enabled] = useState(false);

  const toggleSwitch1 = () => {
    setSwitch1Enabled(!switch1Enabled);
    setSwitch2Enabled(false);
    setSwitch3Enabled(false);
  };

  const toggleSwitch2 = () => {
    setSwitch1Enabled(false);
    setSwitch2Enabled(!switch2Enabled);
    setSwitch3Enabled(false);
  };

  const toggleSwitch3 = () => {
    setSwitch1Enabled(false);
    setSwitch2Enabled(false);
    setSwitch3Enabled(!switch3Enabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Switch
          trackColor={{ false: "#E74646", true: "#E74646" }}
          thumbColor={switch1Enabled ? "#ffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={switch1Enabled}
        />
        <Text style={styles.label}>Continuando accetti i termini e le condizioni d’uso di BEGETHER e confermi di aver letto l’informativa sulla privacy</Text>
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
    fontSize: 10,
  },
});

export { Select };
