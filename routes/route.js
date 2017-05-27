const express = require('express');
const router = express.Router();

//Retrieving data
router.get('/contacts', (req, res, next) => {
    res.send('Contact list');
});

//Add contacts

module.exports = router;