const express = require('express');
const router = express.Router();

router.get('/ninjas', function (req, res) {
    res.send({ METHOD: "GET" })
})

router.post('/ninjas', function (req, res) {
    res.send({ METHOD: "POST" })
})


router.put('/ninjas/:id', function (req, res) {
    res.send({ METHOD: "PUT" })
})


router.delete('/ninjas/:id', function (req, res) {
    res.send({ METHOD: "DELETE" })
})

module.exports = router;