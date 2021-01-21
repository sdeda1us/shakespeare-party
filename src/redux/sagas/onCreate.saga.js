import { put, takeLatest } from 'redux-saga/effects';

function* onCreateSaga() {
    yield takeLatest('CREATE_PLAY_INSTANCE', createPlayInstance);
}

function* createPlayInstance(action) {
    try {
       yield put({type: 'POST_PLAY_EVENT', payload: action.payload});
       yield put({type: 'UPDATE_USER', payload: {inputCode: action.payload.joinCode, user: action.payload.userId}});
       yield put({type: 'FETCH_PLAY_META', payload: {joinCode: action.payload.joinCode}});
       yield put({type: 'FETCH_PLAYERS', payload: {joinCode: action.payload.joinCode}});
    } catch(error){
        console.log('error creating initial data state', error);
    }
}

export default onCreateSaga;