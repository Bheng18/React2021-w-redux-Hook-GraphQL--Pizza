import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cartSagas";
import { shopSagas } from "./shop/shopSaga";
import { userSagas } from "./user/userSagas";

export default function* rootSaga() {
    yield all([
      call(shopSagas),
      call(userSagas),
      call(cartSagas)
    ]);
}