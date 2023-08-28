const express = require('express');
const router = express.Router();
const User = require('../model/UserSchema');

router.get('/displayusers', async (req, res) => {
    try {
      // Fetch user data from the database, e.g., using a User model
      const users = await User.find();
      console.log(users);
      // Send the retrieved user data as a JSON response
      res.json(users);
    } catch (error) {
      // Handle errors and send an error response
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = router;