const router = require("express").Router();
const middleware = require('../lib/middleware')

router.post('/login', middleware.checkUser, (req, res) => {
    res.send('welcome, ' + req.body.username)
})

module.exports = router;