import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to signup with email and password
    //if signed up  modify state and stay authenticated
    // if signup fails reflect an error msg somewhere
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
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
  { isSignedIn: false }
);
