import Express from 'express';
const router = Express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /news route. :)');
});
router.get('/add', function(req, res) {
    res.send('GET handler for /news/add route. ;)');
});

export default router;