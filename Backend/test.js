const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.URL;

console.log("Testing connection to:", URL);

mongoose.connect(URL, { family: 4 })
    .then(() => {
        console.log("SUCCESSFULLY CONNECTED WITH IPv4 FORCE");
        process.exit(0);
    })
    .catch((err) => {
        console.error("FAILED EVEN WITH IPv4:", err);
        process.exit(1);
    });
