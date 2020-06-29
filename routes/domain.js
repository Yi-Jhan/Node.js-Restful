const router = require("express").Router();
const middleware = require('../lib/middleware')

router.get('/checkDomain', middleware.checkDomain, (req, res) => {
    res.send('Domain is true')
})

module.exports = router;