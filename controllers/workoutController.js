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

router.get("/api/workouts/:id", (req, res) => {
    db.Workout.findById(req.params.id)
        .then((foundWorkout) => {
            res.json(foundWorkout);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: `Failed to retrieve ingredient with id: ${req.params.id}`,
            });
        });
});

router.post("/api/workouts/:id", (req, res) => {
    db.Workout.createWorkout(req.body)
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
    db.Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedWorkout) => {
            res.json(updatedWorkout);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to update ingredient.",
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