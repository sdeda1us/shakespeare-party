import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* playEventSaga() {
    yield takeLatest('POST_PLAY_EVENT', postPlayEvent);
    yield takeLatest('FETCH_PLAY_EVENT', fetchPlayEvent);
}

function* postPlayEvent (action) {
    try{ 
        yield call(axios.post, '/api/play-event', action.payload);
        yield put({type: 'FETCH_PLAY_EVENT', payload: action.payload});
    } catch(error) {
        console.log('error posting play event instance', error);
    }
}

function* fetchPlayEvent (action) {
    try{
        const response = yield call(axios.get, `/api/play-event/${action.payload.joinCode}`);
        yield put({type: 'SET_PLAY_EVENT', payload: response.data});
    }  catch(error) {
        console.log('error retrieving play instance', error);
    }
}