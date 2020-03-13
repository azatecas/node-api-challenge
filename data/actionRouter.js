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

router.post('/', (req, res) => {
    const body = req.body;
    Action
        .insert(body)
        .then(() => {
            res.status(201).json({message: "action created", action: body})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errorMessage: "error on adding action" 
            })}
        )
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    Action
        .update(id, body)
        .then(() => {
            res.status(200).json({message: "it has edited", action: body })
        })
        .catch(() => {
            res.status(500).json({
                errorMessage: "error on editing action"
            })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Action
        .remove(id)
        .then(() => {
            res.status(200).json({message: "deleted successfully", id_of_show_deleted: id})
        })
})

module.exports = router;