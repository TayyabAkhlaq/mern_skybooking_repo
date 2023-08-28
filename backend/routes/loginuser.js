const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/UserSchema');
const jwt = require('jsonwebtoken');
const jwtsecret = "I am Tayyab Akhlaq from Faisalabad doing BSCS  .";

router.post("/loginuser",

  async (req, res) => {
    
    let email = req.body.email;
    console.log("email in the login backend ",email);
    try {
      let userdata = await User.findOne({email});
      console.log("documnet is ",userdata);
      if(!userdata)
      {
        return res.status(400).json({errors:"email masla"});
      }

       const pwdcompare =await bcrypt.compare(req.body.password,userdata.password)
      if(!pwdcompare)
      {
        return res.status(400).json({errors:"not found"});
      }

      const data = {
        user : {
          id:userdata.id
        }
      }
      const authToken = jwt.sign(data,jwtsecret)
      return res.json({ success: true, authToken:authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;

