const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/Post.model');



// POST route => to create a new post
router.post('/create-post', (req, res, next) => {
    const { title, text } = req.body;
  
    Post.create({
      title,
      text,
      owner: req.session.user._id // req.user._id is to recognised the logged in user 
    })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });


  // GET route => to get all the posts

router.get('/posts', (req, res, next) => {
    Post.find()
      .then(allTheProjects => res.json(allTheProjects))
      .catch(err => res.json(err));
  });

module.exports = router;
