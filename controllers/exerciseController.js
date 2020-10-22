const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/exercise", (req, res) => {
    db.Exercise.find({})
        .populate("ingredients")
        .then((foundExercise) => {
            res.json(foundExercise);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to retrieve Exercise.",
            });
        });
});

router.get("/api/exercise/:id", (req, res) => {
    db.Exercise.findById(req.params.id)
        .populate("Exercise")
        .then((foundExercise) => {
            res.json(foundExercise);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: `Failed to retrieve Exercise with id: ${req.params.id}`,
            });
        });
});

router.post("/api/exercise", (req, res) => {
    db.Exercise.create(req.body)
        .then((newExercise) => {
            res.json(newExercise);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to create new Exercise.",
            });
        });
});

router.put("/api/exercise/:id", (req, res) => {
    db.Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedExercise) => {
            res.json(updatedExercise);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to update Exercise.",
            });
        });
});

router.delete("/api/exercise/:id", (req, res) => {
    db.Exercise.findByIdAndDelete(req.params.id)
        .then((deletedExercise) => {
            res.json(deletedExercise);
        })
        .catch((err) => {
            console.log(err);
            res.json({
                error: true,
                data: null,
                message: "Failed to delete Exercise.",
            });
        });
});

module.exports = router;