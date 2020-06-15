const express = require('express');
const router = express.Router();

// define the home page route
router.get('/culturelife', async function(req, res) {
    res.render('culturelife/culturelife', {
        title: 'culture&life',
        description: 'culturelife'
    })
});

router.get('/detail', async function(req, res) {
    res.render('culturelife/detail', {
        title: 'culture&life',
        description: 'culturelife'
    })
});

module.exports = router;




