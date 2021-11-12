const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Call = require('../models/Call.model');



// POST route => to create a new post
router.post('/create-call', (req, res, next) => {
    const { topic, time, date, amountOfTime} = req.body;
  
    Call.create({
        topic,
        time,
        date,
        amountOfTime,
        owner: req.user._id // req.user._id is to recognised the logged in user 
    })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });


  // GET route => to get all the posts

router.get('/calls', (req, res, next) => {
    Call.find()
      .then(allTheCalls => res.json(allTheCalls))
      .catch(err => res.json(err));
  });


  // GET route => to retrieve a specific call
router.get('/calls/:callid', (req, res, next) => {
    const { callid } = req.params;
   
    Call.findById(callid)
      .then(call => res.json(call))
      .catch(error => res.json(error));
  });
   
  // PUT route => to update a specific call
  router.put('/calls/:callid', (req, res, next) => {
    const { callid } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(callid)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Call.findByIdAndUpdate(callid, req.body)
      .then(() => res.json({ message: `Call with ${callid} is updated successfully.` }))
      .catch(err => res.json(err));
  });
   
  // DELETE route => to delete a specific call
  router.delete('/calls/:callid', (req, res, next) => {
    const { callid } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(callid)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Call.findByIdAndRemove(callid)
      .then(() => res.json({ message: `Call with ${callid} is removed successfully.` }))
      .catch(error => res.json(error));
  });