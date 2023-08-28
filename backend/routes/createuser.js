const express = require('express');
const router = express.Router();
const User = require('../model/UserSchema');
const bcrypt = require('bcryptjs');

router.post('/createuser', async (req, res) => {
  const salt = await bcrypt.genSalt();
  const scrpsw= await bcrypt.hash(req.body.password,salt);
    try {
      await User.create({
        name: req.body.name,          
        location: req.body.location,
        email: req.body.email,
        password: scrpsw
      });
      // console.log(req.body);
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  });
  
module.exports = router;