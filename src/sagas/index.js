import { all, fork } from "redux-saga/effects";
import watchSignInSaga from "./Watchers/Auth";

export default function* root() {
  yield all([fork(watchSignInSaga)]);
}
