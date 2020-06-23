const result = {
    checkDomain: (req, res, next) => {
        const reqPort = req.headers.host;
        if (reqPort !== "localhost:3000") {
            res.send('Domain Error')
        }
        next()
    },
    checkAdmin: (req, res, next) => {
        const name = req.params.path;
        if (name !== 'Chris') {
            res.send('You are not Admin!!!')
        }
        next()
    },
    checkUser: (req, res, next) => {
        const name = req.body.username;
        if (name !== 'Chris') {
            res.send('You are not User!!!')
        }
        next()
    }
}
module.exports = result;