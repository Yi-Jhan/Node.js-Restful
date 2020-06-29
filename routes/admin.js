const router = require("express").Router();
const middleware = require('../lib/middleware')

router.get('/setSession', middleware.checkDomain, (req, res) => {

    // Set session
    req.session.username = 'chris'
    req.session.email = 'chris@gmail.com'

    // Get session
    // console.log(req.session)

    res.send('Session is success')
})

router.get('/checkSession', middleware.checkAdmin, (req, res) => {
    // console.log(req.query)
    res.send(`Hello ${req.query.user}. <br> Session is success`)

})

router.get('/edit/:path/', middleware.checkAdmin, (req, res) => {
    try {

        // Get params
        // const name = req.params;
        // console.log(name)

        // Get cookie
        // console.log(req.cookies)

        // Set cookie
        // res.cookie('name', 'Chris', {
        //     maxAge: 100000,
        //     httpOnly: true
        // })
        // console.log(req.cookies)

        res.send('success')

    } catch (err) {
        res.send('GG')
    }
})

module.exports = router;