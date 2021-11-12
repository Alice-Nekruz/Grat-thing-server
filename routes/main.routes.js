const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/Project.model');
const Call = require('../models/Task.model');



// POST route => to create a new post
router.post('/create-post', (req, res, next) => {
    const { title, description } = req.body;
  
    Project.create({
      title,
      description,
      tasks: [],
      owner: req.user._id // req.user._id is to recognised the logged in user 
    })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });


  // GET route => to get all the posts

router.get('/posts', (req, res, next) => {
    Project.find()
      .then(allTheProjects => res.json(allTheProjects))
      .catch(err => res.json(err));
  });