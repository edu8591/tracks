import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { token: action.payload, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "Signout":
      return { errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: "login",
      payload: token,
    });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

const signup = (dispatch) => {
  return async ({ email, password }, navigation) => {
    try {
      // make api request to signup with email and password
      const response = await trackerApi.post("/signup", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      navigate("TrackList");
      //if signed up  modify state and stay authenticated

      dispatch({
        type: "login",
        payload: response.data.token,
      });
    } catch (err) {
      // if signup fails reflect an error msg somewhere
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({
      type: "clear_error",
    });
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/login", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      navigate("TrackList");

      dispatch({
        type: "login",
        payload: response.data.token,
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with login",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({
      type: "Signout",
    });
    navigate("LoginFlow");
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
