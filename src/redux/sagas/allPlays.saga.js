import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* allPlaysSaga() {
    yield takeLatest('FETCH_ALL_PLAYS', fetchAllPlays);
}

function* fetchAllPlays() {
    const response = yield call(axios.get, '/api/all-plays'); 
    yield put({type: 'SET_ALL_PLAYS', payload: response.data});
}

export default allPlaysSaga;