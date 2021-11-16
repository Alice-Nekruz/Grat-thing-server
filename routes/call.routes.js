const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Call = require('../models/Call.model');




// POST route => to create a new call
router.post('/create-call', (req, res, next) => {
  const { topic, date, amountOfTime,toWhom  } = req.body;


  Call.create({
    topic,
    date,
    amountOfTime,
    toWhom,
    owner: req.session.user._id
  })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

//Get route ==> to retrive list of calls 
router.get('/call-list', (req, res, next) => {
  
  Call.find()
  .then(call => res.json(call))
  .catch(error => res.json(error));
})

// GET route => to retrieve a specific call
router.get('/call-details/:callid', (req, res, next) => {
  const { callid } = req.params;

  Call.findById(callid)
    .then(call => res.json(call))
    .catch(error => res.json(error));
});


// PUT route => to update a specific call
router.put('/edit-call/:callid', (req, res, next) => {
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
router.delete('/delete-call/:callid', (req, res, next) => {
  const { callid } = req.params;

  if (!mongoose.Types.ObjectId.isValid(callid)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Call.findByIdAndRemove(callid)
    .then(() => res.json({ message: `Call with ${callid} is removed successfully.` }))
    .catch(error => res.json(error));
});

module.exports = router;
