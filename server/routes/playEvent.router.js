const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  const sqlText = `SELECT * from play_event WHERE join_code=$1;`;
  pool.query(sqlText, [req.params.id])
  .then(result => res.send(result.rows))
  .catch(error => console.log('error retrieving play list', error))
});

router.get('/', (req, res) => {
  const sqlText = `SELECT * from play_event;`;
  pool.query(sqlText)
  .then(result => res.send(result.rows))
  .catch(error => console.log('error retrieving play list', error))
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const sqlText = `INSERT INTO play_event (play_id, troupe_name, join_code, director_id)
                    VALUES ($1, $2, $3, $4);`;
  pool.query(sqlText, [req.body.playChoice, req.body.troupeName, req.body.joinCode, req.body.userId])
  .then(result => {res.sendStatus(201)})
  .catch(error => {
    console.log('error posting new play instance', error);
    res.sendStatus(500);
  })

});

module.exports = router;
