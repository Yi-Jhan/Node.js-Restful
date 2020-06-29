const router = require("express").Router();
const middleware = require('../lib/middleware')

router.post('/setCookie', (req, res) => {

    // Set cookie
    res.cookie('name', 'Chris', {
        maxAge: 100000,
        httpOnly: true
    })
    // console.log(req.cookies)
    res.send(`${req.body.username} cookie insert Success!`)
})

router.post('/getCookie', middleware.checkUser, (req, res) => {

    // Get cookie
    res.send(`Cookie's value is ${req.cookies.name}`)

})

module.exports = router;