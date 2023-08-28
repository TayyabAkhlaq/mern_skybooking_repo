// import mongoose from 'mongoose';
const express = require('express');
const FlightSchema = require('../model/FlightSchema');
const router = express.Router();
router.post('/searchflight',async (req,res)=>{
    const from = req.body.from;
    const to = req.body.to;
    const classes = req.body.class;
    const departure = req.body.departure;
    const returns = req.body.return;
    const adults = req.body.adults;
    const childrens = req.body.childrens;
    // console.log(`from : ${from} to : ${to} classes : ${classes} departure : ${departure} `)
    try {
        const foundFlight = await FlightSchema.findOne({from : from , to: to, class:classes , departure : departure , return : returns, adults:adults , childrens : childrens})
        if (foundFlight) {
            console.log(foundFlight);
            return res.json({ success: true });
          } else {
            console.log("Not Found");
            return res.json({ success: false });
          }
        } catch (error) {
          console.error(error); // Handle errors appropriately, e.g., log or send an error response
          return res.status(500).json({ success: false, error: "Internal Server Error" });
        }

})

module.exports = router;