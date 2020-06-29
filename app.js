const express = require("express")
const app = express()
var session = require('express-session')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.use(express.static(__dirname + "/public"));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true,
        maxAge: 600000,
        secure: false
    }
}))


app.get('/', (req, res) => {
    res.send('Hello API')
})

app.use("/domain", require("./routes/domain"));
app.use("/admin", require("./routes/admin"));
app.use("/user", require("./routes/user"));

app.listen(process.env.PORT || 3000);
// app.listen(process.env.PORT || 3001);
