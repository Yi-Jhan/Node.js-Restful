const result = {
    checkDomain: (req, res, next) => {
        const reqPort = req.headers.host;
        if (reqPort !== "localhost:3000") {
            res.send('Domain Error')
        }
        next()
    },
    checkAdmin: (req, res, next) => {
        if (req.query.user !== req.session.username) {
            res.send('Your session is not Admin!!!')
        } else {
            next()
        }

    },
    checkUser: (req, res, next) => {
        if (req.cookies.name !== 'Chris') {
            res.send('Your cookie is not User!!!')
        } else {
            next()
        }

    }
}
module.exports = result;