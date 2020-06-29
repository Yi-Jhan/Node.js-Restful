const result = {
    // Set cookie
    setCookie: (location = 'en', type = 'production_locale') => {
        const cookie = req.cookies[type];
        if (cookie === undefined) {
            let maxAge = 1000 * 60 * 60 * 24 * 365 * 5;
            res.cookie(type, location, { maxAge, httpOnly: true });
            // console.log(`${location}, ${type} success`);
        }
    },

    // Get cookie
    getCookie: (req) => {
        const cookie = req.cookies["production_locale"];
        if (cookie !== undefined) {
            return cookie
        }
    }

}

module.exports = result;
