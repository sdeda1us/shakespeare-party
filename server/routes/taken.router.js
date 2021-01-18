const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get(`/:id`, (req, res) => {
    const sqlText=`SELECT * FROM user_roles WHERE troupe_code=($1);`;
    pool.query(sqlText, [req.params.id])
    .then(result => {res.send(result.rows)})
    .catch(error => console.log('error retrieving taken parts from server', error))
})

router.delete(`/:id`, (req, res) => {
    const sqlText=`DELETE from user_roles WHERE role_id=$1;`;
    pool.query(sqlText, [req.params.id])
    .then(result => {res.sendStatus(200)})
    .catch(error => console.log('error updating taken parts on server', error))
})

module.exports = router;