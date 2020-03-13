const express = require('express');

const router = express.Router();
const Action = require("./helpers/actionModel.js");

router.get('/', (req, res) => {
    Action
        .get(req.params.id)
        .then(act => {
            res.status(200).json(act)
        })
        .catch((err)=> {
            res.status(500).json({error: err})
        })
})


module.exports = router;