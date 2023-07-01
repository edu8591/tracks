import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import { requestForegroundPermissionsAsync } from "expo-location";
import Map from "../components/map";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Text h2> Create Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TrackCreateScreen;
