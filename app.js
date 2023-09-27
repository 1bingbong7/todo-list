require("dotenv").config();
const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

// express body parser so we get JSON bodies always
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use("/api", require("./routes/index")(app));

app.get("/", (req, res) => {
    res.send("REST API for a TODO List");
});

module.exports = app;



