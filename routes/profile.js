const router = require("express").Router();
const middleware = require('../lib/middleware')

router.get('/', middleware.checkDomain, (req, res) => {

    // Get session
    console.log("1", req.session)

    // Set session
    req.session.username = 'ChrisSession'
    req.session.email = 'chris@gmail.com'

    // Get session
    console.log("2", req.session)

    res.send('Hello Session')
})

router.get('/edit/:path/', middleware.checkAdmin, (req, res) => {
    try {

        // Get params
        const name = req.params;
        // console.log(name)

        // Get cookie
        // console.log(req.cookies)

        // Set cookie
        res.cookie('name', 'Chris', {
            maxAge: 100000,
            httpOnly: true
        })
        // console.log(req.cookies)

        res.send('success')

    } catch (err) {
        res.send('GG')
    }
})

module.exports = router;