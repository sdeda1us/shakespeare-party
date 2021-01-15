const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  let sqlText = `SELECT sp.play_code, sp.play_name, pe.play_id, pe.troupe_name, pe.join_code, pe.director_id 
                FROM shakespeare_plays AS sp
                JOIN play_event AS pe ON pe.play_id = sp.id
                WHERE pe.join_code = $1
                ;`;
  pool.query(sqlText, [req.params.id])
  .then(result => {res.send(result.rows[0])})
  .catch(error => console.log('error retrieving play list', error))
});

router.put('/', (req, res) => {
  console.log(req.body);
  let sqlText = `UPDATE play_event SET director_id=$1 WHERE join_code=$2;`;
  pool.query(sqlText, [req.body.director, req.body.joinCode])
  .then(result => {res.sendStatus(201)})
  .catch(error => {
    console.log('error updating troupe name', error);
    res.sendStatus(500);
  })
})

module.exports = router;