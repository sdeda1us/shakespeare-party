import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* textSaga() {
    yield takeLatest('FETCH_CHAPTERS', fetchChapters);
    yield takeLatest('FETCH_ACTS', fetchActs);
    yield takeLatest('FETCH_PLAY', fetchPlay);
}

function* fetchChapters(action) {
    try {
        const response = yield call(axios.get, `/api/chapter/${action.payload.workid}`); 
        yield put({type: 'SET_CHAPTERS', payload: response.data});
    } catch(error){
        console.log('error retrieving list of chapters', error);
    }
}

function* fetchActs(action) {
    try{
        const response = yield call(axios.get, `/api/act/${action.payload.workid}`); 
        yield put({type: 'SET_ACT', payload: response.data});
    }catch(error){
        console.log('error retrieving list of acts', error);
    }
}

function* fetchPlay(action) {
    try{
        const response = yield call(axios.get, `/api/text/${action.payload.workid}`); 
        yield put({type: 'SET_TEXT', payload: response.data});
    }catch(error){
        console.log('error retrieving list of acts', error);
    }
}

export default textSaga;