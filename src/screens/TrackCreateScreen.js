import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Text h2> Create Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TrackCreateScreen;
