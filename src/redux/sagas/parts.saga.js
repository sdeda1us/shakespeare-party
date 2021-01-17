import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* partSaga() {
    yield takeLatest('FETCH_CHARTEXT', fetchCharText);
    yield takeLatest('POST_PART', postPart);
    yield takeLatest('FETCH_TAKEN_PARTS', fetchTakenParts);
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
        yield console.log(action.payload);
        yield put({type:'FETCH_TAKEN_PARTS', payload:action.payload});
    } catch(error){
        console.log(`error posting part assignemnt`, error);
    }
}

function* fetchTakenParts(action){
    try{
        yield call(axios.get, `/api/taken/${action.payload.user.troupe_code}`);
    }catch(error){
        console.log('error getting filled roles', error);
    }
}

export default partSaga;