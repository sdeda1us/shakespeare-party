const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
  let sqlText = `SELECT DISTINCT section FROM chapters WHERE workid=$1 ORDER BY section;`;
  pool.query(sqlText, [req.params.id])
  .then(result => {res.send(result.rows)})
  .catch(error => console.log('error retrieving play list', error))
});



module.exports = router;
