const mongoose = require("mongoose");
require("dotenv").config();

var uri = process.env.DATABASE_URL;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(uri, options).then(
    () => {
        console.log("Database connection established!");
    },
    (err) => {
        {
            console.log("Error connecting Database instance due to:", err);
        }
    }
);