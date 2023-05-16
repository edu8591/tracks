import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { token: action.payload, errorMessage: "" };
    case "signup":
      return { token: action.payload, errorMessage: "" };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
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
        type: "signup",
        payload: response.data.token,
      });
    } catch (err) {
      // if signup fails reflect an error msg somewhere
      dispatch({
        type: "add_error",
        payload: "Something whent wrong with signup",
      });
    }
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
        payload: "Something whent wrong with login",
      });
    }
    // Try to sign in
    //handle success by updating state
    // handle error by showing user an error msg
  };
};

const signout = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
