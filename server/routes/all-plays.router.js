const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  let sqlText = `SELECT * from shakespeare_plays`;
  pool.query(sqlText)
  .then(result => {res.send(result.rows)})
  .catch(error => console.log('error retrieving play list', error))
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
