import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AccountScreen;
