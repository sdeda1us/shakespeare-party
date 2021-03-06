const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.delete('/:id', (req, res) => {
  const joinCode = req.params.id;
  console.log('server join code:', joinCode);
  const sqlText = `DELETE FROM play_event WHERE join_code=$1;`;
  pool.query(sqlText, [joinCode])
  .then(result => {res.sendStatus(201)})
  .catch(error => {
    console.log('error updating users info after delete', error);
    res.sendStatus(500);
  })  
})
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

router.put('/', (req, res) => {
  const joinCode = req.body.joinCode;
  const sqlText = `UPDATE "user" SET troupe_code=NULL WHERE troupe_code=$1;`;
  pool.query(sqlText, [joinCode])
  .then(result => {res.sendStatus(201)})
  .catch(error => {
    console.log('error updating users info after delete', error);
    res.sendStatus(500);
})
});

router.put('/:id', (req, res) => {
  let sqlText = `UPDATE play_event SET troupe_name=$1 WHERE join_code=$2;`;
  pool.query(sqlText, [req.body.name, req.params.id])
  .then(result => {res.sendStatus(201)})
  .catch(error => {
    console.log('error updating troupe name', error);
    res.sendStatus(500);
  })
})



module.exports = router;
