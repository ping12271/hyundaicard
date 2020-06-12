const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', async function(req, res) {
    res.render('home', {
        title: 'home',
        description: 'main page'
    })
});

router.get('/culture&life', async function(req, res) {
    res.render('culture&life', {
        title: 'culture&life',
        description: 'culture&life'
    })
});

module.exports = router;




