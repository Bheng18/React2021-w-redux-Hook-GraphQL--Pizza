import { call, put, takeEvery } from 'redux-saga/effects'
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

// import { fetchCollectionsStartAsync } from "./shop.actions";
import { ShopActionTypes } from "./shop.types";

export function* fetchCollectionsStartAsync() {
    // yield console.log('i am fired');
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
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsStartAsync
    );
}