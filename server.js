const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/murmuring-dusk-98089", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const databaseUrl = "fitnesstracker";
const collections = ["fitnesstracker"];

const db = mongojs(databaseUrl, collections);


app.listen(3000, () => {
    console.log("App running on port 3000!");
});