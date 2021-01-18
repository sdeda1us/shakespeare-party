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
  let sqlText=`INSERT INTO user_roles (role_id, actor_id, actor_name, troupe_code)
                VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [req.body.part.charid, req.body.user.id, req.body.user.username, req.body.user.troupe_code])
    .then(res.sendStatus(200))
    .catch(error => console.log('error adding actor to part', error))
});



module.exports = router;
