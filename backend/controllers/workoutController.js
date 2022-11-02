const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields !", emptyFields });
  }

  // add to the database
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  // var _id = req.body.id;
  var updatedWorkout = {
    updName: req.body.title,
    updLoad: req.body.load,
    upReps: req.body.reps,
  };

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, updatedWorkout, {
    new: true,
  });

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};

// UPDATE/PATCH: // update a workout
// res.status(200).json(workout)
//  const workout = await workout.findOneAndUpdate({ _id: id }, {...req.body}, {new: true})
// json = await response.json()

// "UPDATE_WORKOUT":
//               return {workouts: state.workouts.map((workout) =>  workout._id === action.payload._id ? action.payload : workout)}
// with comments :::::::::::::::::::::::::::::::::::::::::::::

// UPDATE/PATCH:  Spent days trying to figure out why useContext wasn't working when I extended this series to include UPDATE/PATCH.
// Should have read Joakim's comment - would have saved soooooo much time.
// I spent a lot of time on this series trying to figure out what I did wrong, thus posting it here also.
// In #7, ninjaSupaGod (Shaun, Shawn or Sean) wrote the mongo updateWorkout express controller that returns this:    res.status(200).json(workout) , which is the old {object} before updating and not the new updated {object} in the mongo.  To return the updated {object} and still use the findOneAndUpdate, use this (or on of the many other way - read mongo docs):
//                const workout = await workout.findOneAndUpdate({ _id: id }, {...req.body}, {new: true})
// Update Form:  Now, when you write the onSubmit handler fetch, you can use the  json = await response.json() from server to update useContext dispatch (#12).

// workoutContext.js Switch Case "UPDATE_WORKOUT":  Found two ways that work - used this cause it's simple (but there may be better ways, I'm diaper wearing new):
//                return {workouts: state.workouts.map((workout) =>  workout._id === action.payload._id ? action.payload : workout)}
