const Workout = require("../models/workout.js")
const router = require("express").Router()

router.get('/api/workouts',(req,res)=>{
    Workout.find().then(foundWorkouts=>{
        res.json(foundWorkouts)
    })
})
router.post('/api/workouts',(req,res)=>{
    Workout.create({}).then(createdWorkout=>{
        res.json(createdWorkout)
    })
})
router.put('/api/workouts/:id',(req,res)=>{
    console.log(req.params)
    console.log(req.body)
    Workout.findByIdAndUpdate(req.params.id, {$push:{exercises: req.body}}).then(addedWorkout=>{
        res.json(addedWorkout)
    })
    .catch(err=>console.log(err))
})
module.exports = router;