const express = require('express');
const router = express.Router();

// define the home page route
router.get('/culturelife', async function(req, res) {
    res.render('culturelife/culturelife', {
        title: '컬처·라이프스타일',
        description: 'culturelife'
    })
});

router.get('/detail', async function(req, res) {
    res.render('culturelife/detail', {
        title: 'detail',
        description: 'detail'
    })
});

module.exports = router;




