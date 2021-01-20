const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  let sqlText = `SELECT id, workid, title, longtitle from works`;
  pool.query(sqlText)
  .then(result => {res.send(result.rows)})
  .catch(error => console.log('error retrieving play list', error))
});


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
