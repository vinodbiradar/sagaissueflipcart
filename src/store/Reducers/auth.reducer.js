import {
  SIGNINLOADING,
  SIGNINERROR,
  SIGNINSUCCESS,
  CLEARSIGNINSTATE,
  SIGNUPLOADING,
  SIGNUPSUCCESS,
  SIGNUPERROR,
} from "../Actions/constantType";

// initialState for sign-in
const initialState = {
  signInMessage: "",
  signInError: false,
  signInLoading: false,
  signInSuccess: "",
  signUpMessage: "",
  signUpSuccess: "",
  signUpLoading: false,
  signUpError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNINLOADING:
      return { state, signInLoading: true };

    case SIGNINERROR:
      return {
        state,
        signInError: true,
        signInMessage: action.message,
      };

    case SIGNINSUCCESS:
      return {
        state,
        signInSuccess: true,
        signInMessage: "Sign In Success",
      };

    case CLEARSIGNINSTATE:
      return initialState;

    case SIGNUPLOADING:
      return { state, signUpLoading: true };

    case SIGNUPSUCCESS:
      return {
        state,
        signUpSuccess: true,
        signUpMessage: "Sign Up Success",
      };

    case SIGNUPERROR:
      return {
        state,
        signUpError: true,
        signUpMessage: action.message,
      };

    default:
      return state;
  }
};

export default authReducer;
