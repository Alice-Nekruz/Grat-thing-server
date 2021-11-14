

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User.model');


router.get('/my-profile', (req, res, next) => {

    console.log(req.session.user)

    User.findById(req.session.user._id)
      .then(allTheProfile => res.json(allTheProfile))
      .catch(err => res.json(err));
  });


module.exports = router;
