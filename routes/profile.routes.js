
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User.model');


router.get('/friend-list', (req, res, next)=>{
  User.find()
      .then(allTheProfile => res.json(allTheProfile))
      .catch(err => res.json(err));
})


router.get('/my-profile/:id', (req, res, next) => {

    const {id} = req.params

    User.findById(id)
      .then(allTheProfile => res.json(allTheProfile))
      .catch(err => res.json(err));
});


module.exports = router;
