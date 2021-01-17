import { put, call, takeLatest } from 'redux-saga/effects';
import {useDispatch, useSelector} from 'react-redux';



function* dashboardSaga() {
    yield takeLatest('FETCH_DASHBOARD', fetchDashboard);
}

function* fetchDashboard(action) {
    
    try {
        yield put({type: 'FETCH_PLAY_META', payload: {joinCode: action.payload.troupe_code}});
        yield put({type: 'FETCH_PLAYERS', payload: {joinCode: action.payload.troupe_code}});
    } catch(error){
        console.log('error retrieving list of plays', error);
    }
}

export default dashboardSaga;