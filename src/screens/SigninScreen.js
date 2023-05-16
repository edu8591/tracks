import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

import AuthForm from "../components/AuthForm";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  console.log(state);
  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        headerText="Log in to Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Login"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Spacer>
          <Text style={styles.link}>
            Don't have an account? Sign up instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  link: {
    color: "blue",
  },
});
export default SigninScreen;
