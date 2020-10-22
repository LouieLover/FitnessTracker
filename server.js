const express = require("express");

const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const workoutController = require("./controllers/workoutController");
const exerciseController = require("./controllers/exerciseController");

const app = express();

const db = require("./models");

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

app.get("/api/workouts", (req, res) => {
    res.json({
        success: true,
    });
});
app.get("/api/workouts/:id", (req, res) => {
    res.json({
        success: true,
    });
});
app.post("/api/workouts", (req, res) => {
    res.json({
        success: true,
    });
});
app.put("/api/workouts/:id", (req, res) => {
    res.json({
        success: true,
    });
});

app.delete("/api/workouts/:id", (req, res) => {
    res.json({
        success: true,
    });
});

app.use(workoutController);
app.use(exerciseController);

app.get("/exercise", (req, res) => {

    res.sendFile(path.join(__dirname, "./public/exercise.html"));

});
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});




app.listen(PORT, () => {
    console.log("App running on port http://localhost:" + PORT);
});


// mongodb + srv: //1234:4XN0DH2Fjc0kK4YP@random.a37sp.mongodb.net/fitnesstracker?retryWrites=true&w=majority