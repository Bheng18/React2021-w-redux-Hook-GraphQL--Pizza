import { all, call, put, takeLatest } from 'redux-saga/effects'
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionsStartAsync() {
    try {
      const collectionRef = firestore.collection('collections');
      const snapshot = yield collectionRef.get();
      const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
      yield put(fetchCollectionsSuccess(collectionMap));
    } catch(error){
       yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}