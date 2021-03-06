import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import allPlaysSaga from './allPlays.saga';
import playEventSaga from './playEvent.saga';
import playMetaSaga from './playMeta.saga';
import partSaga from './parts.saga';
import textSaga from './text.saga';
import onCreateSaga from './onCreate.saga';
import onDashboardSaga from './onDashboard.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    allPlaysSaga(),
    playEventSaga(),
    playMetaSaga(),
    partSaga(),
    textSaga(),
    onCreateSaga(),
    onDashboardSaga(),
  ]);
}
