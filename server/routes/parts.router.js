const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
  let sqlText = `SELECT c.charname, c.charid, c.description, c.speechcount FROM characters AS c 
                 WHERE c.works=$1;`; 
  pool.query(sqlText, [req.params.id])
  .then(result => {res.send(result.rows)})
  .catch(error => console.log('error retrieving play list', error))
});


router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
