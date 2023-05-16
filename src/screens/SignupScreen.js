import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Signup"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

SignupScreen.navigationOptions = () => {
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
export default SignupScreen;
