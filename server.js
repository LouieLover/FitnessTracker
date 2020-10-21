const express = require("express");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
});


app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});

app.get("/api/index", (req, res) => {
    res.json({
        success: true,
    });
});
app.get("/exercise", (req, res) => {
    res.json({
        success: true,
    });
});
app.get("/stats", (req, res) => {
    res.json({
        success: true,
    });
});
app.get("/workout", (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(PORT, () => {
    console.log("App running on port 3000!");
});


// mongodb + srv: //1234:4XN0DH2Fjc0kK4YP@random.a37sp.mongodb.net/fitnesstracker?retryWrites=true&w=majority