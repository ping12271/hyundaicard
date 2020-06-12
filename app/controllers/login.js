const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', async function(req, res) {
    res.render('culture&life', {
        title: 'culture&life',
        description: 'culture&life page'
    })
});


module.exports = router;