const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Post = require('../models/Post.model');
// ********* require fileUploader in order to use it *********
const fileUploader = require('../config/cloudinary.config');


// POST route => to create a new post
router.post('/create-post', (req, res, next) => {
    const { title, text, imageUrl } = req.body;
  
    Post.create({
      title,
      text,
      imageUrl,
      owner: req.session.user._id // req.user._id is to recognised the logged in user 
    })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });


  // GET route => to get all the posts

router.get('/posts', (req, res, next) => {
    Post.find()
    .populate("owner")
      .then(allThePosts=> res.json(allThePosts))
      .catch(err => res.json(err));
  });


  // POST route => to upload an image

router.post('/upload', fileUploader.single('imageUrl'), (req, res, next) => {
    // console.log('file is: ', req.file)
   
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    res.json({ secure_url: req.file.path });
});

module.exports = router;
