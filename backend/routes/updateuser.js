const express = require('express');
const router = express.Router();
const User = require('../model/UserSchema');


router.put('/update/:id', async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    
    try {
        // Find the user by ID and update with the new data
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData);
        
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

module.exports = router;