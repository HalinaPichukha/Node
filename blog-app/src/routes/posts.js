const express = require("express");
const router = express.Router();

const postService = require('../services/postService');

router.get('/', (req, res) => {
    let data;
    try{
        data = postService.getAll();
    } catch (err) {
        res.status(500).send({message: err.message});
    }
    console.log(data)
    res.send(data);
})

router.get('/:id', (req, res) => {
    let data;
    try{
        data = postService.getById(req.params.id);
    } catch (err) {
        res.status(err.status).send({message: err.mean});
    }
    res.send(data);
})

router.delete('/:id', (req, res) => {
    let data;
    try{
        data = postService.findByIdAndRemove(req.params.id);
    } catch (err) {
        res.status(err.status).send({message: err.mean});
    }
    res.send(data);
})

router.put('/update/:id', (req, res) => {
    let data;
    try{
        data = postService.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
        res.status(err.status).send({message: err.mean});
    }
    res.send(data);
})

router.post('/', (req, res) => {
    let data;
    try{
        data = postService.insert(req.body);
    } catch (err) {
        res.status(500).send({message: err.mean});
    }
    res.send(data);
})

module.exports = router;