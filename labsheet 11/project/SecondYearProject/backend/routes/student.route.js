let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Student Model
const Student = require('../models/Student'); 
// CREATE Student
router.route('/create-student').post(async (req, res, next) => {
  try {
    const student = new Student(req.body); // Create a new Student instance with the request body
    const savedStudent = await student.save(); // Save the student to the database
    res.json(savedStudent);
  } catch (error) {
    next(error); // Pass any errors to the error handling middleware
  }
});
// READ Students
router.route('/').get(async (req, res) => {
  try {
    const data = await Student.find().exec();
    res.json(data);
  } catch (error) {
    // Handle any errors here
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get Single Student
router.route('/edit-student/:id').get(async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id).exec();
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    // Handle any errors here
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});


// Update Student
router.route('/update-student/:id').put(async (req, res, next) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }).exec();
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(updatedStudent);
    console.log('Student updated successfully !');
  } catch (error) {
    // Handle any errors here
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete Student
router.route('/delete-student/:id').delete(async (req, res, next) => {
  try {
    const deletedStudent = await Student.findByIdAndRemove(req.params.id).exec();
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ msg: 'Student deleted successfully' });
  } catch (error) {
    // Handle any errors here
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;