import { put, takeLatest, call, all, delay } from "./node_modules/redux-saga/effects";
import { SIGNIN, SIGNUP } from "../../Actions/constantType";
import {
  signInSuccess,
  signInError,
  signInLoading,
  signUpSuccess,
  signUpError,
  signUpLoading,
} from "../../Actions/auth";
import Firebase from "../../../firebase/Firebase";

//Sign-in Sagas
function* signIn(actions) {
  try {
    yield put(signInLoading());
    const firebase = new Firebase();
    yield put(signUpLoading());
    const user = yield firebase.doSignInWithEmailAndPassword(
      actions.payload.email,
      actions.payload.password
    );
    yield put(signInSuccess());
  } catch (error) {
    yield put(signInError(error.message));
  }
}

//Sign-up Sagas
function* signUp(actions) {
  try {
    const firebase = new Firebase();
    yield put(signUpLoading());
    const user = yield firebase.doCreateUserWithEmailAndPassword(
      actions.payload.email,
      actions.payload.password
    );
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpError(error.message));
  }
}

export default function* watchSignInSaga() {
  yield all([takeLatest(SIGNIN, signIn), takeLatest(SIGNUP, signUp)]);
}
