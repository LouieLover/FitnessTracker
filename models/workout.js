const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        trim: true,

    },
    name: {
        type: String,
        trim: true,

    },
    duration: {
        type: String,
        trim: true,


    },
    distance: {
        type: String,
        trim: true,


    },
    weight: {
        type: String,
        trim: true,


    },
    reps: {
        type: String,
        trim: true,


    },
    sets: {
        type: String,
        trim: true,


    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// "type": data.type,
//     "name": data.name,
//     "duration": data.duration,
//     "distance": data.distance,
//     "weight": data.weight,
//     "reps": data.reps,
//     "sets": data.sets
// }