import {
  SIGNIN,
  SIGNINSUCCESS,
  SIGNINERROR,
  SIGNINLOADING,
  CLEARSIGNINSTATE,
  SIGNUP,
  SIGNUPLOADING,
  SIGNUPSUCCESS,
  SIGNUPERROR,
} from "./constantType";

// Sign-in actions
const signIn = (email, password) => {
  console.log("Actions here", email, password);
  return { type: SIGNIN, payload: { email, password } };
};

const signInSuccess = () => {
  return { type: SIGNINSUCCESS };
};

const signInError = (message) => {
  return { type: SIGNINERROR, message };
};

const signInLoading = () => {
  return { type: SIGNINLOADING };
};

const clearSignInState = () => {
  return { type: CLEARSIGNINSTATE };
};

// Sign-up actions

const signUp = (name, email, password) => {
  return { type: SIGNUP, payload: { name, email, password } };
};

const signUpSuccess = () => {
  return { type: SIGNUPSUCCESS };
};

const signUpError = (message) => {
  return { type: SIGNUPERROR, message };
};

const signUpLoading = () => {
  return { type: SIGNUPLOADING };
};

export {
  signIn,
  signInSuccess,
  signInError,
  signInLoading,
  signUp,
  signUpSuccess,
  signUpError,
  signUpLoading,
};
