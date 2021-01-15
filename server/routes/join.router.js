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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;