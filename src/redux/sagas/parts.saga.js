import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* partSaga() {
    yield takeLatest('FETCH_CHARTEXT', fetchCharText);
    yield takeLatest('POST_PART', postPart);
    yield takeLatest('FETCH_TAKEN_PARTS', fetchTakenParts);
    yield takeLatest('DELETE_TAKEN_PARTS', deleteTakenParts);
}

function* fetchCharText(action) {
    try {
        const response = yield axios.get (`/api/parts/${action.payload.playCode}`);
        yield put({type: 'SET_CHARACTERS', payload: response.data});
        yield put({type: 'FETCH_TAKEN_PARTS', payload: action.payload.troupeCode});
    } catch(error){
        console.log('error retrieving list of plays', error);
    }
}

function* postPart(action) {
    try {
        yield axios.post(`/api/parts/`, action.payload);
        console.log('ACTION.PAYLOAD', action.payload)
        yield put({type:'FETCH_TAKEN_PARTS', payload:action.payload.user.troupe_code});
    } catch(error){
        console.log(`error posting part assignemnt`, error);
    }
}

function* fetchTakenParts(action){
    try{
        const response = yield axios.get (`/api/taken/${action.payload}`);
        yield put({type:'SET_TAKEN_PARTS', payload: response.data});


    }catch(error){
        console.log('error getting filled roles', error);
    }
}

function* deleteTakenParts(action){
    console.log(action.payload);
    yield axios.delete (`/api/taken/${action.payload.role}`);
    yield put({type: 'FETCH_TAKEN_PARTS', payload: action.payload.joinCode});
}

export default partSaga;