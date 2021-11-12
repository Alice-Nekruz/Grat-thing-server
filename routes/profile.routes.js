

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User.model');


router.get('/my-profile/:id', (req, res, next) => {
    
    const { id } = req.params;


    User.findById(id)
      .then(allTheProfile => res.json(allTheProfile))
      .catch(err => res.json(err));
  });


module.exports = router;
