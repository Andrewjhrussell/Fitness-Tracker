const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutS = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: "Must have excercise type"
                },
                name: {
                    type: String,
                    required: "Must have name"
                },
                duration: {
                    type: Number,
                    required: "Must say how long worked out"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }, {
    toJSON: {
        virtuals: true
    }}

);

workoutS.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration
    }, 0)
  })


  const Workout = mongoose.model("Workout", workoutS);

  module.exports = Workout;
  