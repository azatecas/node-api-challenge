const express = require('express');

const router = express.Router();
const Project = require("./helpers/projectModel.js");


router.get('/', (req, res) => {
    Project
        .get(req.params.id)
        .then(act => {
            res.status(200).json(act)
        })
        .catch((err)=> {
            res.status(500).json({error: err})
        })
})

router.get('/:id/actions', (req, res) => {
    Project
        .getProjectActions(req.params.id)
        .then(act => {
            res.status(200).json(act)
        })
        .catch((err)=> {
            res.status(500).json({error: err})
        })
})

router.post('/', (req, res) => {
    const body = req.body;
    Project
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
    Project
        .update(id, body)
        .then(() => {
            res.status(200).json({message: "it has edited", project: body })
        })
        .catch(() => {
            res.status(500).json({
                errorMessage: "error on editing action"
            })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Project
        .remove(id)
        .then(() => {
            res.status(200).json({message: "deleted successfully", id_of_show_deleted: id})
        })
        .catch(() => {
            res.status(500).json({
                errorMessage: "error on deleting show"
            })
        })
})






module.exports = router;
