import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* folgerMetaSaga() {
    yield takeLatest('FETCH_CHARTEXT', fetchCharText);
}

function* fetchCharText() {
    try {
        const response = yield call(axios.get, 'https://folgerdigitaltexts.org/Ham/charText/'); 
       console.log(response);
    } catch(error){
        console.log('error retrieving list of plays', error);
    }
}

export default folgerMetaSaga;