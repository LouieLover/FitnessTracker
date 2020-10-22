const { Router } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then((foundWorkout) => {
            res.json(foundWorkout);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to retrieve ingredients.",
            });
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then((foundWorkout) => {
            res.json(foundWorkout);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to retrieve ingredients.",
            });
        });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((newWorkout) => {
            res.json(newWorkout);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to create new Workout.",
            });
        });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then((updatedWorkout) => {
            res.json(updatedWorkout);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to update workout.",
            });
        });
});

router.delete("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndDelete(req.params.id)
        .then((deletedWorkout) => {
            res.json(deletedWorkout);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to delete ingredient.",
            });
        });
});

module.exports = router;