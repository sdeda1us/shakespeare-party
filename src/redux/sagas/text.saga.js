import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* textSaga() {
    yield takeLatest('FETCH_CHAPTERS', fetchChapters);
    
}

function* fetchChapters(action) {
    try {
        const response = yield call(axios.get, `/api/chapter/${action.payload.workid}`); 
        yield put({type: 'SET_CHAPTERS', payload: response.data});
    } catch(error){
        console.log('error retrieving list of plays', error);
    }
}



export default textSaga;