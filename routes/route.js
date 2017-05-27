const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//Retrieving data
router.get('/contacts', (req, res, next) => {
    Contact.find( (err, contacts) => {
        res.json(contacts);
    });
});

//Add contacts
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact) => {
        if(err) {
            res.json({msg: 'Failed to add contact'});
        } else {
            res.json({msg: 'Contact added successfully'});
        }
    })
});

//Delete Contact
router.delete('/contact/:id', (req, res, next) => {

});

module.exports = router;