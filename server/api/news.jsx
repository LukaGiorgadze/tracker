var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /news route.');
});
router.get('/add', function(req, res) {
    res.send('GET handler for /news/add route.');
});

module.exports = router;