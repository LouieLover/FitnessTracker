const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true,

        },
        name: {
            type: String,
            trim: true,
            required: true,


        },
        duration: {
            type: Number,

            required: true,


        },
        distance: {
            type: Number,
            trim: true,


        },
        weight: {
            type: Number,
            trim: true,


        },
        reps: {
            type: Number,
            trim: true,


        },
        sets: {
            type: Number,
            trim: true,


        }
    }],
    day: {
        type: Date,
        default: () => new Date(),
    },

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;