'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.send("SMS Microservice");
});


app.listen(port, () => {

    console.log(`Running on ${port}`);
});

require("./config/db");

var routes = require('./api/routes/smsRoutes');
routes(app);