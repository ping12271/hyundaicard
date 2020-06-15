const express = require('express');
const router = express.Router();

// define the home page route
router.get('/faq', async function(req, res) {
    res.render('customer/faq', {
        title: 'customer',
        description: 'customer'
    })
});

module.exports = router;




