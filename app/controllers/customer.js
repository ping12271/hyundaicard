const express = require('express');
const router = express.Router();

// define the home page route
router.get('/customer', async function(req, res) {
    res.render('customer/customer', {
        title: 'customer',
        description: 'customer'
    })
});

router.get('/faq', async function(req, res) {
    res.render('customer/faq', {
        title: 'faq',
        description: 'faq'
    })
});

module.exports = router;




