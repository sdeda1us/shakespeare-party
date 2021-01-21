import { put, takeLatest } from 'redux-saga/effects';

function* onDashboardSaga() {
    yield takeLatest('GRAB_TEXT_DATA', grabTextData);
}

function* grabTextData(action) {
    try {
        yield put({type: 'FETCH_CHAPTERS', payload: {workid: action.payload.workid}});
        yield put({type: 'FETCH_ACTS', payload: {workid: action.payload.workid}});
        yield put({type:'FETCH_PLAY', payload: {workid: action.payload.workid}});
        yield put({type: 'FETCH_CHARTEXT', payload: {playCode: action.payload.workid, troupeCode: action.payload.troupeCode}})
    } catch(error){
        console.log('error creating initial data state', error);
    }
}

export default onDashboardSaga;