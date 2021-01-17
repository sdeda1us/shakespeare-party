import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* playMetaSaga() {
    yield takeLatest('FETCH_PLAY_META', fetchPlayMeta);
    
}

function* fetchPlayMeta(action) {
    try {
        const response = yield call(axios.get, `/api/join/${action.payload.joinCode}`); 
        yield put({type: 'SET_PLAY_META', payload: response.data});
    } catch(error){
        console.log('error retrieving list of plays', error);
    }
}



export default playMetaSaga;