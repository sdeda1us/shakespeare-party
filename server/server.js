
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const allPlaysRouter = require('./routes/all-plays.router');
const playEventRouter = require('./routes/playEvent.router');
const joinRouter = require('./routes/join.router');
const partsRouter = require('./routes/parts.router');
const takenRouter = require('./routes/taken.router');
const chapterRouter = require('./routes/chapter.router');
const actRouter = require('./routes/act.router');
const textRouter = require('./routes/text.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/all-plays', allPlaysRouter);
app.use('/api/play-event', playEventRouter);
app.use('/api/join', joinRouter);
app.use('/api/parts', partsRouter);
app.use('/api/taken', takenRouter);
app.use('/api/chapter', chapterRouter);
app.use('/api/act', actRouter);
app.use('/api/text', textRouter);



// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
