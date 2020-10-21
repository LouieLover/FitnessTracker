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
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const databaseUrl = "fitnesstracker";
const collections = ["fitnesstracker"];

const db = mongojs(databaseUrl, collections);
const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
});

app.get("/", (req, res) => {
    res.json({
        success: true,
    });
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

app.listen(3000, () => {
    console.log("App running on port 3000!");
});
// mongodb + srv: //papadocarock@gmail.com:1234@random.a37sp.mongodb.net/fitnesstracker?retryWrites=true&w=majority


// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// const PORT = process.env.PORT || 3000;

// // const ingredientsController = require("./controllers/ingredientsController");
// // const pizzaController = require("./controllers/pizzaController")

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/murmuring-dusk-98089", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//     }
// );

// const connection = mongoose.connection;

// connection.on("connected", () => {
//     console.log("Mongoose successfully connected.");
// });

// connection.on("error", (err) => {
//     console.log("Mongoose connection error: ", err);
// });

// app.get("/", (req, res) => {
//     res.json({
//         success: true,
//     });
// });

// app.get("/api/config", (req, res) => {
//     res.json({
//         success: true,
//     });
// });

// // app.use(ingredientsController);
// // app.use(pizzaController);

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });