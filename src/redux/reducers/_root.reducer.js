import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import allPlays from './allPlays.reducer';
import playEvent from './playEvent.reducer';
import allPlayEvents from './allPlayEvents.reducer';
import playMeta from './playMeta.reducer';
import players from './players.reducer';
import parts from './parts.reducer';
import takenParts from './takenParts.reducer';
import chapter from './chapter.reducer';
import act from './act.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  allPlays, //list of plays for select play dropdown option
  playEvent,
  allPlayEvents,
  playMeta,
  players,
  parts,
  takenParts,
  chapter,
  act,
});

export default rootReducer;
