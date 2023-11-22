const express = require('express');
const router = express.Router();
const User = require('./model');

// POST method endpoint
router.post('/bfhl', async (req, res) => {
  try {
    const {
      userId,
      collegeEmailId,
      collegeRollNumber,
      numbers,
      alphabets,
    } = req.body;

    const newUser = new User({
      userId,
      collegeEmailId,
      collegeRollNumber,
      numbers,
      alphabets,
    });

    await newUser.save();

    // Calculate the highest alphabet in the input array of alphabets
    const highestAlphabet = alphabets.reduce((max, current) => {
      return current > max ? current : max;
    }, 'A'); // Assuming 'A' is the default highest alphabet

    res.json({
      status: 'Success',
      userId,
      collegeEmailId,
      collegeRollNumber,
      numbers,
      alphabets,
      highestAlphabet,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
  }
});



module.exports = router;
