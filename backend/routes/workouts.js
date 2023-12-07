const express = require ('express')

const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/',getWorkouts) //get all workouts

//get a single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//DELETE a  workout
router.delete('/:id', deleteWorkout)

//UPDATE a single workout
router.patch('/:id', updateWorkout)


module.exports = router