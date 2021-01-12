import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export default function* playEventSaga() {
    yield takeLatest('POST_PLAY_EVENT', postPlayEvent);
}

function* postPlayEvent (action) {
    try{ 
        yield call(axios.post, '/api/play-event', action.payload);
    } catch(error) {
        console.log('error posting play event instance', error);
    }
    
}
