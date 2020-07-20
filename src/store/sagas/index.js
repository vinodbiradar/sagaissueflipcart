import { all, fork } from "./node_modules/redux-saga/effects";
import watchSignInSaga from "./Watchers/Auth";

export default function* root() {
  yield all([fork(watchSignInSaga)]);
}
