import { put, takeLatest, all, take } from "redux-saga/effects";
import {
  SIGNIN,
  SIGNUP,
  FETCH_PRODUCTS_REQUEST,
} from "../../Actions/constantType";
import {
  signInSuccess,
  signInError,
  signInLoading,
  signUpSuccess,
  signUpError,
  signUpLoading,
  fetchingProduct,
  productFetchRequest,
  productSuccess,
  productError,
} from "../../Actions/auth.action";
import { app } from "firebase/app";
import { eventChannel } from "redux-saga";

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

//Product Sagas
function* fetchingProducts() {
  const ref = app.firestore().collection("products");
  const channel = eventChannel((emit) => ref.onSnapshot(emit));

  try {
    while (true) {
      const data = yield take(channel);
      yield put(productSuccess(data));
    }
  } catch (err) {
    yield put(productError(err));
  }
}

export default function* watchSignInSaga() {
  yield all([
    takeLatest(SIGNIN, signIn),
    takeLatest(SIGNUP, signUp),
    takeLatest(FETCH_PRODUCTS_REQUEST, fetchingProducts),
  ]);
}
