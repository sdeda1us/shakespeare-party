const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get(`/:id`, (req, res) => {
    const sqlText=`SELECT * FROM user_roles WHERE troupe_code=($1);`;
    console.log(req.params.id);
    pool.query(sqlText, [req.params.id])
    .then(result => {console.log(result.rows); res.send(result.rows)})
    .catch(error => console.log('error retrieving taken parts from server', error))
})

module.exports = router;