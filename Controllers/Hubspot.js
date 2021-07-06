const request = require('request');
const express = require('express');
const router = express.Router();

router.get('/getAllContacts', async(req, res, next) => {
    try {
        const endpoint = 'contacts/v1/lists/all/contacts/all';
        const contacts = await request({
            method: 'GET',
            url: `https://api/hubapi.com/${endpoint}`,
            qs: {
                hapikey: "8546fa0c-6010-4ad0-9437-58df1a2e4437"
            },
            json: true
        })
        let userContact = [];
        [...contacts.contacts].map(data => {
            userContact.push(data.properties);
        })
        res.status(200).send({"Contacts": userContact});
    } catch (error) {
        
    }
})

router.post('/createContacts', async(req, res, next) => {
    try {
        const endpoint = 'contacts/v1/contact';
        console.log(req.body.userContact);
        const contacts = await request({
            method: 'POST',
            url: `https://api/hubapi.com/${endpoint}`,
            qs: {
                hapikey: "8546fa0c-6010-4ad0-9437-58df1a2e4437"
            },
            body: req.body.userContact,
            json: true
        })
    } catch (error) {
        
    }
})

module.exports = router;