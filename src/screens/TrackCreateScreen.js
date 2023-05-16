import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TrackCreateScreen;
