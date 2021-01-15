import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* folgerMetaSaga() {
    yield takeLatest('FETCH_CHARTEXT', fetchCharText);
}

function* fetchCharText(action) {
    try {
        console.log('folgerMeta CHATEXT action.payload', action.payload);
        const response = yield call(axios.get, `/api/folger/${action.payload.playCode}`);
        yield put({type: 'SET_CHARACTERS', payload: response.data});
    } catch(error){
        console.log('error retrieving list of plays', error);
    }
}

export default folgerMetaSaga;