import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />

      <AuthForm
        headerText="Log in to Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Login"
      />
      <NavLink
        routeName="Signup"
        title="Don't have an account? Sign up instead"
      />
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
});
export default SigninScreen;
