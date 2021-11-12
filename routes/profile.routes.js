

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/Call.model');


router.get('/my-profile/:id', (req, res, next) => {
    User.findById()
      .then(allTheProfile => res.json(allTheProfile))
      .catch(err => res.json(err));
  });


module.exports = router;
