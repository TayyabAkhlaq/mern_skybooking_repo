const express = require('express');
const router = express.Router();
const User = require('../model/UserSchema');

router.delete('/:id', async (req, res) => {
    const documentId = req.params.id;

    console.log("requrst param is :",documentId);

    try {
      const deletedDocument = await User.findByIdAndDelete(documentId);
      console.log(User.findByIdAndDelete(documentId));
      
      if (!deletedDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }


      res.json({success : true})
      // return res.status(204).json(); // Successful deletion, no content in response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  module.exports= router;
  