const express = require('express');
const router = express.Router();
const Flight = require('../model/FlightSchema');

router.post('/addflight', async (req, res) => {
    try {
      await Flight.create({
        from: req.body.from,          
        to: req.body.to,
        class: req.body.class,
        departure: req.body.departure,
        return: req.body.return,
        adults:req.body.adults,
        childrens:req.body.childrens
      });
      
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  });
  
module.exports = router;