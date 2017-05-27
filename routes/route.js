const express = require('express');
const router = express.Router();

//Retrieving data
router.get('/contacts', (req, res, next) => {
    res.send('Contact list');
});

//Add contacts
router.post('/contact', (req, res, next) => {
    
});

//Delete Contact
router.delete('/contact/:id', (req, res, next) => {

});

module.exports = router;