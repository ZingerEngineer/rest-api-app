const express = require('express');
const router = express.Router();

router.get('/ninjas', function (req, res) {
    res.send({ METHOD: "GET" })
})

router.post('/ninjas', function (req, res) {
    console.log(req.body);
    res.send({
        METHOD: "POST",
        name: req.body.name,
        rank: req.body.rank

    })
})


router.put('/ninjas/:id', function (req, res) {
    res.send({ METHOD: "PUT" })
})


router.delete('/ninjas/:id', function (req, res) {
    res.send({ METHOD: "DELETE" })
})

module.exports = router;