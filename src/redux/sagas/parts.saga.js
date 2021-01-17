import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* partSaga() {
    yield takeLatest('FETCH_CHARTEXT', fetchCharText);
    yield takeLatest('POST_PART', postPart);
}

function* fetchCharText(action) {
    try {
        const response = yield call(axios.get, `/api/parts/${action.payload.playCode}`);
        yield put({type: 'SET_CHARACTERS', payload: response.data});
    } catch(error){
        console.log('error retrieving list of plays', error);
    }
}

function* postPart(action) {
    try {
        yield call(axios.post, `/api/parts/`, action.payload);
    } catch(error){
        console.log(`error posting part assignemnt`, error);
    }
}

export default partSaga;